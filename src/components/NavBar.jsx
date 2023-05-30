import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import LogoutBtn from "./auth/LogoutBtn"


function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <LogoutBtn />
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default NavBar