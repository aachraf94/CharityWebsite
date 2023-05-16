import Reg from "./Reg"
import HP1user from "./Homes/HP1user";
import NavbarMenu from "./Navbar";


function Register  ({ role })  {
    if (role !== "ADMIN" && role !== "MEMBRE") return <Reg />
    else return <><HP1user /><NavbarMenu role={role} /></>
  }

export default Register ;