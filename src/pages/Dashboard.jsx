import LogoutBtn from "../components/auth/LogoutBtn"
import { Box, AppBar, Toolbar, Typography  } from "@mui/material"

function Dashboard() {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <LogoutBtn/>
        </Toolbar>
      </AppBar>
    </Box>
    <div className="h-screen flex justify-center items-center text-7xl">
  
    <iframe src="https://gifer.com/embed/Mgz" height={400} width={400} ></iframe>

    </div>
    </div>
  )
}

export default Dashboard