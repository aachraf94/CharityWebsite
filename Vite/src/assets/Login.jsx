import Log from "./Log"
import NavbarMenu from "./Navbar"
import HP1user from "./Homes/HP1user"

function Login  ({ role })  {
  if (role !== "ADMIN" && role !== "MEMBRE") return <Log />
    else return <><HP1user /><NavbarMenu role={role} /></>
  }

export default Login ;