import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

function LogoutBtn() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button
        variant="contained"
        color="error"
        onClick={() => logout()}
        endIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    )
  );
}

export default LogoutBtn;
