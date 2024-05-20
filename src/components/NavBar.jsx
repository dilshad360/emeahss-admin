import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import LogoutBtn from "./auth/LogoutBtn"
import { useAuth0 } from '@auth0/auth0-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from "../assets/emea_logo.jpeg"


function NavBar() {

  const { user } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar  position="static">
          <Toolbar>
            <div className="flex justify-between w-full items-center">
            <img className="w-10 rounded-sm" src={Logo} alt="logo" />
            <div className="flex items-center gap-2">
            <div className="flex"  >
              <AccountCircleIcon/>
              <Typography className="px-2 hidden md:block">{user.email}</Typography>
            </div>
            <LogoutBtn />
            </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default NavBar