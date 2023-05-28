import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';


function LoginBtn() {
 
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
    <Button variant="contained" size="large" fullWidth onClick={()=>loginWithRedirect()}>
            Login
    </Button>
    ) 
  )
}

export default LoginBtn