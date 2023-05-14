const authPage = (permissions) => {
  return async (req, res, next) => {
    const token = req.body.token;
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      /**       req.user =
       *      {user:'johndoe@gmail.com' iat:13138194...}
       *    we need to say req.user.user to get the logged-in user's email
       */
      req.user = user;
    });
    const[rows,fields]=await db
    .promise()
    .execute("select * from users where email = ?",req.user.user);
    if(rows.length ==0){
      return res.json(404);
    }
    else{
      if(permissions.includes(rows[0].role)){
        next();
      }
      else{
        
      return res.status(401).json("You don't have permission");
      }
    }
    // if (permissions.includes(userRole)) {
    //   next();
    // } else {
    //   return res.status(401).json("You don't have permission");
    // }
  };
};
module.exports = { authPage };
