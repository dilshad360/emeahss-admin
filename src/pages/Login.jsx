import { Typography, Box, Paper } from "@mui/material";
import logo from "../assets/emea_logo.jpeg";
import background from "../assets/background.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import LoginBtn from "../components/auth/LoginBtn";

function Login() {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace={true} />
  }

  if (isLoading) {
    return <Loader open="true" />;
  }

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box>
        <Paper
          elevation={3}
          className="flex justify-center items-center flex-col gap-4 px-10 py-12"
        >
          <img className="w-20" src={logo} alt="logo"></img>
          <div className="text-center">
            <Typography
              variant="h4"
              style={{
                fontWeight: "bold",
                color: "darkblue",
              }}
            >
              EMEAHSS
            </Typography>
            <Typography
              variant="h6"
              style={{
                color: "darkblue",
              }}
            >
              Admin Panel
            </Typography>
          </div>
            <LoginBtn/>
        </Paper>
      </Box>
    </div>
  );
}

export default Login;
