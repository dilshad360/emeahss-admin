import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import LogoutBtn from "./auth/LogoutBtn"
import { useAuth0 } from '@auth0/auth0-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NavBar() {

  const { user } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div className="flex-1 flex"  >
              <AccountCircleIcon/>
              <Typography className="px-2">{user.email}</Typography>
            </div>
            <LogoutBtn />
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default NavBar