const express = require("express");
const app = express(); // Using ExpressJS for the APP
const bcrypt = require("bcrypt");
const mysql = require("mysql2"); // Mysql2 updates
const sgMail = require("@sendgrid/mail"); // send grid mail delivery service
const jwt = require("jsonwebtoken");
const cors = require("cors"); //cors for request authorization
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const { Buffer } = require('buffer');

const sharp = require("sharp");
const cloudinary = require("cloudinary").v2;
const upload = multer({ dest: "Home/" });
const generateAccessToken = require("./generateAccessToken");
require("dotenv").config();
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch");
const jwtDecode = require("jwt-decode");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")

const port = process.env.PORT;
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(cors());
app.use(express.json());


// Configuration
cloudinary.config({
  cloud_name: "dsi1up4rk",
  api_key: "379922382879818",
  api_secret: "VBgvtckSDAc9b33_JeMCBR1qBhY",
});

//DB info from .env file
//CONFIGURING THE DB CONNECTION
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;
const db = mysql.createPool({
  connectionLimit: 100,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  Promise, // using built-in Promise object
});
app.listen(port, () => console.log(`Server Started on port ${port}...`));

 // Accept to parse every json we send to the body

//GET BLOGS
app.get("/getBlogs", async (req, res) => {
  const [rows, fields] = await db.promise().execute("select * from blogs");

  return res.send(rows);
});


 app.post("/getrole", async (req, res) => {
  if (req.body.email === undefined) {
    return res.send({ role: "visitor" });
  }
  const email = req.body.email;
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email = ?", [email]);
  if (rows.length == 0) return res.sendStatus(404);

  res.send({ role : rows[0].role }); // send the userrole variable as a JSON object
});
// LOGIN API (AUTHENTICATE USER)
app.post("/login", async (req, res) => {
  //getting info from the body
  const user = req.body.email;
  const password = req.body.password;

  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  //TODO:CHECK IF THE REFRESH TOKEN ALREADY EXISTS IN THE DB , AND IF SO THEN DON'T LOGIN ONCE AGAIN
  db.getConnection(async (err, connection) => {
    if (err) throw err;

    //checking whether email exists in the db
    const [rows, fields] = await db
      .promise()
      .execute("Select * from users where email = ?", [user]);
    if (rows.length == 0) {

      res.sendStatus(404);
    } else {
      //comparing the passwords using bcrypt.compare()
      const hashedPassword = rows[0].password;
      await bcrypt.compare(
        password,
        hashedPassword,
        async function (err, res2) {
          if (err) throw err;
          if (res2) {
            const accessToken = generateAccessToken({ user: user });
            //refreshTokens.push(refreshToken);
            await db
              .promise()
              .execute("insert into refresh_token values (0,?)", [
                refreshToken,
              ]);
            res.json({ accessToken: accessToken, refreshToken });
          } else {

            res.sendStatus(401, "Password incorrect");
          }
        }
      );
    }
  });
});

//CREATE NEW ACCESS TOKEN FROM REFRESH TOKEN
app.post("/token", async (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken == null) return res.sendStatus(401);

  const [rows, fields] = await db
    .promise()
    .execute("select * from refresh_token where token = ?", [refreshToken]);

  if (rows.length == 0) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ user });
    res.json({ accessToken: accessToken });
  });
});
//SHOW PROFILE INFORMATION
app.get("/profile", async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    /**       req.user =
     *      {user:'johndoe@gmail.com' iat:13138194...}
     *    we need to say req.user.user to get the logged-in user's email
     */
    req.user = user;
  });
  const [rows, fields] = await db.execute(
    "Select * from users where email = ?",
    [req.user.user]
  );
  if (rows.length == 0) return res.send(404);
  return res.json(rows);
});

//GET THE ROLE OF THE USER BASED ON THE MAIL
app.post("/getrole", async (req, res) => {
  if (req.body.email === undefined) {
    return res.json({ role: "visitor" });
  }
  const email = req.body.email;
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email = ?", [email]);

  if (rows.length == 0) return res.json({ role: "visitor" });
  res.json({ role: rows[0].role }); // send the userrole variable as a JSON object
});


app.get("/getphoto", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    const email = jwtDecode(token).user
  

    const [rows1, fields1] = await db
      .promise()
      .execute("SELECT photo from users  WHERE email=?", [email]);
    const [rows2, fields2] = await db
      .promise()
      .execute("SELECT data from photos  WHERE id=?", [rows1[0].photo]);
    const url = `https://res.cloudinary.com/dsi1up4rk/image/upload/v1683021792/Photos_membres/${rows2[0].data}.jpg`;
    // send response
    res.json({ url: url });
  } catch (error) {
    console.error(error);
  }
});

app.get("/listetransactions", async(req,res) => {
 
      db.query("Select * from transactions", (err, results, fields) => {
        if (err) throw err;
        if (results.length === 0) res.json();
        else res.json(results);
      
      });
    
})


app.get("/tridatetran", async(req,res) => {
 
  db.query("select * from transactions order by createdat asc", (err, results, fields) => {
    if (err) throw err;
    if (results.length === 0) res.json();
    else res.json(results);
  
  });

})


app.get("/tricodeoptran", async(req,res) => {
 
  db.query("select * from transactions order by code_op asc", (err, results, fields) => {
    if (err) throw err;
    if (results.length === 0) res.json();
    else res.json(results);
  
  });

})

app.get("/triccptran", async(req,res) => {
 
  db.query("select * from transactions order  by ccp asc ", (err, results, fields) => {
    if (err) throw err;
    if (results.length === 0) res.json();
    else res.json(results);
  
  });

})

app.get("/trinomtran", async(req,res) => {
 
  db.query("select * from transactions order by nom asc", (err, results, fields) => {
    if (err) throw err;
    if (results.length === 0) res.json();
    else res.json(results);
  
  });

})


app.get("/triemailtran", async(req,res) => {
 
  db.query("select * from transactions order by email asc", (err, results, fields) => {
    if (err) throw err;
    if (results.length === 0) res.json();
    else res.json(results);
  
  });

})

app.get("/getevenementbyid",async(req,res)=>{
  const id = req.headers.event_id;
  if(id==undefined){
    return;
  }
  const [rows,fields] = await db
  .promise()
  .execute("select * from events where id = ?",[id]);
  return res.json(rows);
})
app.get("/getevenementsbyemail", async(req,res)=>{

 const [rows,fields ] = await db
 .promise()
 .execute("Select event_id from participant where  email=?",[req.headers.email]);
 return rows

}
)

app.get("/getevenementsbyid", async(req,res)=>{

  const [rows,fields ] = await db
  .promise()
  .execute("Select  from events where  id=?",[req.headers.event_id]);
  return rows
 
 }
 )

app.get("/getphotobyemail", async (req, res) => {
  try {

    const email = req.headers.email;
    const [rows1, fields1] = await db
      .promise()
      .execute("SELECT photo from users  WHERE email=?", [email]);
    const [rows2, fields2] = await db
      .promise()
      .execute("SELECT data from photos  WHERE id=?", [rows1[0].photo]);
    const url = `https://res.cloudinary.com/dsi1up4rk/image/upload/v1683021792/Photos_membres/${rows2[0].data}.jpg`;
    // send response
    res.json({ url: url });

  } catch (error) {
    console.error(error);
  }
});


app.get("/getphotobytitle", async (req, res) => {
  try {

    const title = req.headers.title;

    const [rows1, fields1] = await db
      .promise()
      .execute("SELECT * from events  WHERE title=?", [title]);

    const [rows2, fields2] = await db
      .promise()
      .execute("SELECT data from photos  WHERE id=?", [rows1[0].photo]);
    const url = `https://res.cloudinary.com/dsi1up4rk/image/upload/v1684161985/Photos_evenements/${rows2[0].data}.jpg`;
    // send response
    res.json({ url: url });

  } 
  catch (error) {
    console.error(error);
  }
});




app.get("/getuser", async (req, res) => {
  // Decode the JWT token
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  const email = jwtDecode(token).user;

  const [rows, fields] = await db
    .promise()
    .execute("Select * from users where email=?", [email]);
 try { 
  res.send(rows[0]);
}
   catch {}
});
//MODIFY PASSWORD

app.get("/getparticipant", async (req, res) => {
  // Decode the JWT token
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
    });
    const email = req.headers["email"]; // blog id to delete

    const [rows,fields] = await db
    .promise()
    .execute("select *  from participant where email = ?", [email]);
    res.json(rows[0])
    
  } catch (err) {
    res.sendStatus(403);
  }
});
app.post("/modifyPassword", async (req, res) => {
  const newpassword = req.body.password;
  const email = req.body.email;
  const hashedPassword = await bcrypt.hash(newpassword, 10);
  try {
    await db
      .promise()
      .execute("update users set password = ? where email = ?", [
        hashedPassword,
        email,
      ]);
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(404);
  }
});


//CREATE USER
app.post("/createUser", async (req, res) => {
  //getting information from body
  const email = req.body.email;
  const hashedPassword = await bcrypt.hash(req.body.mot_de_passe, 10);
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const telephone = req.body.telephone;
  const role = "MEMBRE";
  const sexe = req.body.sexe;
  const adresse = req.body.adresse;
  const wilaya = req.body.wilaya;
  const motivation = req.body.motivation;
  const departement = req.body.departement;

  try {
    //check whether email already exists or no
    const [rows, fields] = await db
      .promise()
      .execute("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length != 0) {
      res.sendStatus(409, "User already registered"); // CONFLICT
      return;
    }
    // if not then insert new user into waitings
    const [rows2, fields2] = await db
      .promise()
      .execute("SELECT * FROM enattente WHERE email = ?", [email]);
    if (rows2.length != 0) {
      res.sendStatus(409, "User already waiting!"); // CONFLICT
      return;
    }
    await db
      .promise()
      .execute("INSERT INTO enattente  VALUES (0,?,?,?,?,?,?,?,?,?,?,?)", [
        prenom,
        nom,
        hashedPassword,
        email,
        sexe,
        telephone,
        role,
        adresse,
        wilaya,
        motivation,
        departement,
      ]);
    res.sendStatus(201, "Created new User in the waitings list");
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

//RESET PASSWORD
app.post("/resetPass", async (req, res) => {
  if (req.body == null) return res.sendState(404); // check if the body doesn't have content
  //trying to find whether the mail to send the message to exists or no
  const [rows, fields] = await db
    .promise()
    .execute("Select * from users where email = ?", [req.body.email]);

  //if it doesn't exist then err
  if (rows.length == 0) {
    return res.sendStatus(404);
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: { email: req.body.email },
    from: { email: process.env.EMAIL }, // TODO: noreply mail sender

    templateId: "d-b8a949afaeff4054affa4ca0b290047f", // template id: got from sendgrid account
    dynamicTemplateData: {
      receiver_name: rows[0].firstname,
    },
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      return res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      return res.sendStatus(404);
    });
});



//ADD BLOG
app.post("/addBlog", async (req, res) => {
  const currentDate = new Date();
  const datetime = currentDate.toLocaleString();
  try {
    const authorMail = req.body.authorMail;
    const content = req.body.content;
    const title = req.body.title;

    await db
      .promise()
      .execute("insert into blogs values (0,?,?,?,?)", [
        authorMail,
        title,
        content,
        datetime.replaceAll("/", "-"),
      ]);
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
});

//DELETE BLOG
app.delete("/deleteBlog", async (req, res) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
      if (err) return res.sendStatus(403);
      /**       req.user =
       *      {user:'johndoe@gmail.com' iat:13138194...}
       *    we need to say req.user.user to get the logged-in user's email
       */
      req.user = user;
    });
    const id = req.body.id; // blog id to delete
    await db.promise().execute("delete from blogs where id = ?", [id]);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(403);
  }
});

//GET BESOINS
app.get("/getBesoins", async (req, res) => {
  const [rows, fields] = await db.promise().execute("select * from besoins");
  return res.json(rows);
});
//DELETE BESOIN
app.delete("/archiveBesoin", async (req, res) => {
  const id = req.body.id;
  try {
    await db
      .promise()
      .execute("update besoins set archive = 1 where id = ?", [id]);
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(404);
  }
});

// CREATE NEW BESOIN
app.post("/addBesoin", async (req, res) => {
  const nom = req.body.nom;
  const telephone = req.body.telephone;
  const addresse = req.body.addresse;
  const priorite = req.body.priorite;
  const email = req.body.email;
  const satisfait = 0;
  const content = req.body.content;
  const quantite = req.body.quantite;
  const description = req.body.description;
  const ccp = req.body.ccp;
  const archive = 0;
  const photo = req.body.photo;
  //TODO (SUGGESTED): VALIDATE / FORMALISE DEMAND
  try {
    await db
      .promise()
      .execute("INSERT INTO necessiteux VALUES (0,?,?,?,?,?,?)", [
        nom,
        telephone,
        addresse,
        priorite,
        email,
        satisfait,
      ]);
    await db
      .promise()
      .execute("insert into besoins values(0,?,?,?,?,?,?)", [
        content,
        description,
        quantite,
        ccp,
        archive,
        photo,
      ]);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get("/listenecessiteux", async(req,res) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    if (user == null) {
      return res.sendStatus(403);
    }
    req.user = user;
  });
  if (req.user == null) return res.sendStatus(404);
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email =?", [req.user.user]);
  if (rows.length == 0) {
    return res.sendStatus(403);
  } else {
    if (rows[0].role === "ADMIN") {
      // check if the request sender is ADMIN (only ADMIN can view users_dashboard)
      db.query("Select * from necessiteux", (err, results, fields) => {
        if (err) throw err;
        if (results.length === 0) res.json();
        else res.json(results);
      
      });
    } else {
      return res.sendStatus(403);
    }
  }

  


})




app.get("/listeparticipants", async(req,res) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    if (user == null) {
      return res.sendStatus(403);
    }
    req.user = user;
  });
  if (req.user == null) return res.sendStatus(404);
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email =?", [req.user.user]);
  if (rows.length === 0) {
    return res.sendStatus(403);
  } else {
    if (rows[0].role === "ADMIN") {
      // check if the request sender is ADMIN (only ADMIN can view users_dashboard)
      db.query("Select * from participant", (err, results, fields) => {
        if (err) throw err;
        if (results.length === 0) res.json();
        else res.json(results);
      
      });
    } else {
      return res.sendStatus(403);
    }
  }



})

app.get("/listebesoins", async(req,res) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    if (user == null) {
      return res.sendStatus(403);
    }
    req.user = user;
  });
  if (req.user == null) return res.sendStatus(404);
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email =?", [req.user.user]);
  if (rows.length === 0) {
    return res.sendStatus(403);
  } else {
    if (rows[0].role === "ADMIN") {
      // check if the request sender is ADMIN (only ADMIN can view users_dashboard)
      db.query("Select * from besoins", (err, results, fields) => {
        if (err) throw err;
        if (results.length === 0) res.json();
        else res.json(results);
      
      });
    } else {
      return res.sendStatus(403);
    }
  }



})


app.get("/participant" , async(req,res)=> {

})



app.get("/listestock", async(req,res) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    if (user == null) {
      return res.sendStatus(403);
    }
    req.user = user;
  });
  if (req.user == null) return res.sendStatus(404);
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email =?", [req.user.user]);
  if (rows.length === 0) {
    return res.sendStatus(403);
  } else {
    if (rows[0].role === "ADMIN") {
      // check if the request sender is ADMIN (only ADMIN can view users_dashboard)
      db.query("Select * from stock", (err, results, fields) => {
        if (err) throw err;
        if (results.length === 0) res.json();
        else res.json(results);
        
        
      
      });
    } else {
      return res.sendStatus(403);
    }
  }



})


app.get("/listebesoins", async(req,res) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    if (user == null) {
      return res.sendStatus(403);
    }
    req.user = user;
  });
  if (req.user == null) return res.sendStatus(404);
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email =?", [req.user.user]);
  if (rows.length === 0) {
    return res.sendStatus(403);
  } else {
    if (rows[0].role === "ADMIN") {
      // check if the request sender is ADMIN (only ADMIN can view users_dashboard)
      db.query("Select * from besoins", (err, results, fields) => {
        if (err) throw err;
        if (results.length === 0) res.json();
        else res.json(results);
        
        
      
      });
    } else {
      return res.sendStatus(403);
    }
  }



})

app.get("/listeevenements", async(req,res) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    if (user == null) {
      return res.sendStatus(403);
    }
    req.user = user;
  });
  if (req.user == null) return res.sendStatus(404);
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email =?", [req.user.user]);
  if (rows.length === 0) {
    return res.sendStatus(403);
  } else {
    if (rows[0].role === "ADMIN") {
      // check if the request sender is ADMIN (only ADMIN can view users_dashboard)
      db.query("Select * from events", (err, results, fields) => {
        if (err) throw err;
        if (results.length === 0) res.json();
        else res.json(results);
        
        
      
      });
    } else {
      return res.sendStatus(403);
    }
  }



})

// REFUSE USER
app.post("/refuseUser", async (req, res) => {
  if (req.headers["authorization"] == null) return;
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    /**       req.user =
     *      {user:'johndoe@gmail.com' iat:13138194...}
     *   and hence, we need to say req.user.user to get the logged-in user's email
     */
    if (user == null) {
      return res.sendStatus(403); // FORBIDDEN
    }
    req.user = user;
  });
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email = ?", [req.user.user]);
  if (rows.length == 0) {
    return res.json(404);
  } else {
    // check if ADMIN
    if (rows[0].role === "ADMIN") {
      const emailtorefuse = req.body.email;
      const [rows2, field] = await db
        .promise()
        .execute("Select * from enattente where email = ? ", [emailtorefuse]);
      //check if the mail to refuse is actually waiting
      if (rows2.length == 0) {
        res.sendStatus(404, "User doesn't exist in the waitings list !");
      } else {
        const firstname = rows2[0].firstname;
        const lastname = rows2[0].lastname;
        const password = rows2[0].password;
        const email = rows2[0].email;
        const gender = rows2[0].gender;
        const phone = rows2[0].phone;
        const role = rows2[0].role;
        const address = rows2[0].address;
        const wilaya = rows2[0].wilaya;
        //remove from waitings table
        await db
          .promise()
          .execute("Delete from enattente where email = ?", [email]);
        res.sendStatus(200);
      }
    } else {
      return res.status(401).json("You don't have permission");
    }
  }
});
//FIND USER INFO BY EMAIL
app.post("/findByMail", async (req, res) => {
  const email = req.body.email;

  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email = ?", [email]);
  if (rows.length == 0) {
    return res.sendStatus(404);
  } else {
    return res.json(rows[0]);
  }
});
// ACCEPT USER
app.post("/acceptUser", async (req, res) => {
  if (req.headers["authorization"] == null) return;
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    /**       req.user =
     *      {user:'johndoe@gmail.com' iat:13138194...}
     *   and hence, we need to say req.user.user to get the logged-in user's email
     */
    if (user == null) {
      return res.sendStatus(403);
    }
    req.user = user;
  });
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email = ?", [req.user.user]);
  if (rows.length === 0) {
    return res.json(404); // email NOT FOUND
  } else {
    if (rows[0].role === "ADMIN") {
      // check if acceptor is ADMIN
      const emailtoaccept = req.body.email;
      const [rows2, field] = await db
        .promise()
        .execute("Select * from enattente where email = ? ", [emailtoaccept]);
      if (rows2.length == 0) {
        res.sendStatus(404, "User doesn't exist in the waitings list !");
      } else {
        const firstname = rows2[0].firstname;
        const lastname = rows2[0].lastname;
        const password = rows2[0].password;
        const email = rows2[0].email;
        const gender = rows2[0].gender;
        const phone = rows2[0].phone;
        const role = rows2[0].role;
        const address = rows2[0].address;
        const wilaya = rows2[0].wilaya;
        const departement = rows2[0].departement;
        //remove from waitings tables
        await db
          .promise()
          .execute("Delete from enattente where email = ?", [email]);
        //insert into the user table
        await db
          .promise()
          .execute("INSERT INTO users VALUES (0,?,?,?,?,?,?,?,?,?,0,?)", [
            firstname,
            lastname,
            password,
            email,
            gender,
            phone,
            role,
            address,
            wilaya,
            departement,
          ]);
        res.sendStatus(200);
      }
    } else {
      return res.status(401).json("You don't have permission");
    }
  }
});

//USERS DASHBOARD
app.get("/users_dashboard", async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    /**       req.user =
     *      {user:'johndoe@gmail.com' iat:13138194...}
     *    we need to say req.user.user to get the logged-in user's email
     */
    if (user == null) {
      return res.sendStatus(403);
    }
    req.user = user;
  });
  if (req.user == null) return res.sendStatus(404);
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email =?", [req.user.user]);
  if (rows.length == 0) {
    return res.sendStatus(403);
  } else {
    if (rows[0].role == "ADMIN") {
      // check if the request sender is ADMIN (only ADMIN can view users_dashboard)
      db.query("Select * from users", (err, results, fields) => {
        if (err) throw err;
        if (results.length == 0) res.json("No members yet!");
        else res.json(results);
      
      });
    } else {
      return res.sendStatus(403);
    }
  }
});

// WAITINGS DASHBOARD
app.get("/waitings_dashboard", async (req, res) => {
  if (req.headers == null) return;
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    /**       req.user =
     *      {user:'johndoe@gmail.com' iat:13138194...}
     *    we need to say req.user.user to get the logged-in user's email
     */
    if (user == null) {
      return res.sendStatus(403);
    }
    req.user = user;
  });
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email =?", [req.user.user]);
  if (rows.length === 0) {
    return res.sendStatus(403);
  } else {
    if (rows[0].role == "ADMIN") {
      // check if the request sender is ADMIN (only ADMIN is allowed to view waitings_dashboard)
      db.query("Select * from enattente", (err, results, fields) => {
        if (err) throw err;
        if (results.length === 0) res.json();
        else res.json(results);
      });
    } else {
      return res.sendStatus(403);
    }
  }
});



//GETTING EVENTS
app.get("/getEvents", async (req, res) => {
  const [rows, fields] = await db
    .promise()
    .execute("select * from events where archive = 0");
  return res.send(rows);

});
//DELETE EVENT
app.post("/archiveEvent", async (req, res) => {
  const id = req.body.id;
  try {
    await db
      .promise()
      .execute("update events set archive = 1 where id = ?", [id]);
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(404);
  }
});
// ADDING EVENT
app.post("/addEvent", async (req, res) => {
        // check if the request sender is ADMIN (only ADMIN is allowed to view waitings_dashboard)
        const title = req.body.title;
        const date = req.body.date;
        const description = req.body.description;
        const location = req.body.location;
        const photo = req.body.photo;
        const archive = 0;
        //IF SO THEN INSERT THE EVENT IN DB
        await db
          .promise()
          .execute("insert into events values(0,?,?,?,?,?,?)", [
            title,
            date,
            description,
            location,
            photo,
            archive
          ]);
});

app.get("/trinomuti" ,async(req,res)=> {
 
  const [rows, fields] = await db 
  .promise()
  .execute("Select * from users order by lastname asc")

  res.json(rows)

})

app.get("/trimaterielstock" ,async(req,res)=> {
 
  const [rows, fields] = await db 
  .promise()
  .execute("Select * from stock order by materiel asc")

  res.json(rows)

})

app.get("/triquantitestock" ,async(req,res)=> {
 
  const [rows, fields] = await db 
  .promise()
  .execute("Select * from stock order by quantite asc")

  res.json(rows)

})
//TRI DE PARTICIPANTS PAR NOM
app.get("/trinomparti" ,async(req,res)=> {
  const [rows, fields] = await db 
  .promise()
  .execute("Select * from participant order by lastname asc")
  res.json(rows)
})

//TRI DE PARTICIPANTS PAR Email
app.get("/triemailparti" ,async(req,res)=> {
  const [rows, fields] = await db 
  .promise()
  .execute("Select * from participant order by email asc")
  res.json(rows)
})


app.get("/triprenomuti" ,async(req,res)=> {

  const [rows, fields] = await db 
  .promise()
  .execute("Select * from users order by firstname asc")

  res.json(rows)

})
//TRI USERS BY EMAIL
app.get("/triemailuti" ,async(req,res)=> {
  //
  const [rows, fields] = await db 
  .promise()
  .execute("Select * from users order by email asc")

  res.json(rows)

})


app.get("/trinomnec" ,async(req,res)=> {
 
  const [rows, fields] = await db 
  .promise()
  .execute("Select * from necessiteux order by nom asc")

  res.json(rows)

})

app.get("/tritelnec" ,async(req,res)=> {

  const [rows, fields] = await db 
  .promise()
  .execute("Select * from necessiteux order by telephone asc")

  res.json(rows)

})

app.get("/triadressenec" ,async(req,res)=> {
  const [rows, fields] = await db 
  .promise()
  .execute("Select * from necessiteux order by addresse asc")

  res.json(rows)

})

app.get("/triemailnec" ,async(req,res)=> {
 
  const [rows, fields] = await db 
  .promise()
  .execute("Select * from   necessiteux  order by email asc")

  res.json(rows)

})

app.get("/triprioritenec" ,async(req,res)=> {

  const [rows, fields] = await db 
  .promise()
  .execute("Select * from necessiteux order by priorite asc")

  res.json(rows)

})

app.get("/trimaterielstock" ,async(req,res)=> {
 
  const [rows, fields] = await db 
  .promise()
  .execute("Select * from   stock  order by materiel asc")

  res.json(rows)

})

//ADDING PARTICIPANT TO EVENT
app.post("/addParticipant", async (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const event_id = req.body.event_id;
  await db
    .promise()
    .execute("insert into participant values(0,?,?,?,?,?)", [
      firstname,
      lastname,
      email,
      phone,
      event_id,
    ]);
  return res.sendStatus(200);
});
app.post("/uploadphoto", upload.single("photo"), async (req, res) => {
  try {
    // upload photo to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "Photos_membres",
    });
    const public_id = result.url.split("/").pop().split(".jpg");
    const email = jwtDecode(req.headers.authorization).user;
    // save URL to MySQL database
     await db
      .promise()
      .execute("insert into  photos  values(0,?) ", [public_id[0]]);

      const [rows, fields] = await db
      .promise()
      .execute("select id from photos where  data=? ", [public_id[0]]);

      await db
      .promise()
      .execute("UPDATE users SET photo=? WHERE email=?", [rows[0].id, email]);

    // send response
    res.json({ success: true, url: result.url });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to upload photo" });
  }
});

//SEND THE FORGOT MAIL
app.post("/forgot", async (req, res) => {
  if (req.body == null) return res.sendStatus(404, "No body"); // check if the body doesn't have content
  const email = req.body.email;
  //CHECK IF EMAIL EXISTS IN DB
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email = ?", [email]);
  if (rows.length == 0) {
    console.log("Email doesnt exist");
    return res.sendStatus(404, "Email doesnt exist");
  } else {
    const secret = process.env.ACCESS_TOKEN_SECRET + rows[0].password;
    const payload = {
      email: rows[0].email,
      id: rows[0].id,
    };
    const token = jwt.sign(payload, secret, { expiresIn: "15m" });
    const link = `${rows[0].id}/${token}`;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: {
        email: req.body.email,
        name: "Waiter",
      },
      from: {
        email: process.env.EMAIL, // TODO: noreply mail sender
        name: "Fondation Coeur Espoir",
      },
      templateId: "d-b8a949afaeff4054affa4ca0b290047f", // template id: got from sendgrid account
      dynamicTemplateData: {
        name: rows[0].firstname, // showing : HELLO {{firstname}} in the template (GO TO TEMPLATE IN SENDGRID)
        redirect: link,
      },
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        return res.send(200, "Email sent");
      })
      .catch((error) => {
        console.error(error);
        return res.send(500, "Unknown error");
      });
  }
});

//SEND FEED BACK MAIL
app.post("/sendFeedBack", async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const message = req.body.message;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: {
      email: process.env.EMAIL,
      name: "Fondation Coeur Espoir",
    },
    from: {
      email: process.env.EMAIL
    },
    templateId: "d-93084b864ec04c99aaf7872f23ea7717", // template id: got from sendgrid account
    dynamicTemplateData: {
      email: email,
     name: name, // showing : HELLO {{firstname}} in the template (GO TO TEMPLATE IN SENDGRID)
       message: message,
    },
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      return res.send(200, "Email sent");
    })
    .catch((error) => {
      console.error(error);
      return res.send(500, "Unknown error");
    });
});
//RECEIVING THE REQUEST FROM THE MAIL BUTTON
app.get("/reset_password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  //CHECK IF THIS ID EXISTS IN DB;
  const [rows, fields] = await db
    .promise()
    .execute("Select * from users where id = ?", [id]);
  if (rows.length == 0) {
    return res.sendStatus(404);
  } else {
    //USER EXISTS IN DB
    const secret = process.env.ACCESS_TOKEN_SECRET + rows[0].password;
    try {
      const payload = jwt.verify(token, secret);
      return res.json({ id: id, email: rows[0].email });
    } catch (err) {
      return res.sendStatus(404);
    }
  }
});
//MIS A JOUR USER
app.post("/updateuser", async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    if (user == null) {
      return res.sendStatus(403);
    }
    req.user = user;
  });
  if (req.user == null) return res.sendStatus(404);
  const [rows, fields] = await db
    .promise()
    .execute("select * from users where email =?", [req.user.user]);
  if (rows.length === 0) {
    return res.sendStatus(403);
}
  const nom = req.body.nom ;
  const prenom = req.body.prenom ;
  const email = req.body.email ;
  const phone=req.body.phone;
  const departement = req.body.departement ;
 await db 
  .promise()
  .execute("UPDATE  users  set firstname=? , lastname=?  , phone=? , departement=? where email = ?",[prenom,nom,phone,departement,email]);
  res.send(200); 
});
//MIS A JOUR DE PARTICIPANT
app.post("/updateparticipant", async (req, res) => {
  const nom = req.body.nom ;
  const email = req.body.email ;
  const phone=req.body.phone;
  const id = req.body.id
 await db 
  .promise()
  .execute("UPDATE  participant  SET  lastname=?  , email = ? , phone=?  where id = ?",[nom,email,phone,id]);
  res.send(200); 


});

// UPDATE PASSWORD
app.post("/reset_password", async (req, res) => {
  const id = req.body.id;
  const newPassword = req.body.newPassword;
  const [rows, fields] = await db
    .promise()
    .execute("Select * from users where id = ?", [id]);
  if (rows.length == 0) {
    return res.sendStatus(404, "Mail not found");
  } else {
    //CHANGING PASSWORD
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db
      .promise()
      .execute("update users set password = ? where id = ?", [
        hashedPassword,
        id,
      ]);
    return res.sendStatus(200);
  }
});
//AJOUTER UN DON
app.post("/ajouterdon", async (req, res) => {
  try {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const montant = req.body.montant;
    const adresse = req.body.adresse;
    const numero = req.body.numero;
    const code = req.body.code;
    const currentDate = new Date();
    const datetime = currentDate.toLocaleString();
    await db
      .promise()
      .execute("Insert into don  values(0,?,?,?,?,?,?,?)", [
        nom,
        prenom,
        montant,
        adresse,
        numero,
        datetime.replaceAll("/", "-"),
        code,
        
      ]);
    return res.sendStatus(200);
  } catch (err) {
    throw err;
  }
});
//AJOUTER AUTRE
app.post("/ajouterautre", async (req, res) => {
  const nom = req.body.nom;
  const montant = req.body.montant;
  const adresse = req.body.adresse;
  const description = req.body.description;
  const numero = req.body.numero;
  const contenu = req.body.contenu;

  const [rows, fields] = await db
    .promise()
    .execute("Insert into autre values(0,?,?,?,?,?,?)", [
      nom,
      adresse,
      montant,
      numero,
      contenu,
      description,
    ]);
  return res.sendStatus(200);
});
//SATISFAIRE
app.post("/satisfait", (req, res) => {});

//TRI PAR BESOINS
app.get("/triBesoins", async (req, res) => {
  const [rows, fields] = await db
    .promise()
    .execute("Select * from necessiteux order by content asc");
  return res.json(rows);
});
//TRI PAR PRIORITE
app.get("/triPriorite", async (req, res) => {
  const [rows, fields] = await db
    .promise()
    .execute("Select * from necessiteux order by priorite asc");
  return res.json(rows);
});
//TRI PAR QUANTITE VALABLE
app.get("/triQuantite", async (req, res) => {
  const [rows, fields] = await db
    .promise()
    .execute(
      "Select * from necessiteux order by cast(quantite as unsigned) asc"
    );
  return res.json(rows);
});
app.get("/satisfaire", async (req, res) => {
  const rows = req.body;
  console.log(rows[0]);
  return res.sendStatus(200);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});


