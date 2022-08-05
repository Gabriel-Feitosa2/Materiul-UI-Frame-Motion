import { Box } from "@mui/material";
import LoginForm from "../components/loginForm";

function Login() {
  return (
    <Box
      component="main"
      sx={{
        width: "100wh",
        height: "100vh",
        backgroundColor: "primary.main",
      }}
    >
      <LoginForm />
    </Box>
  );
}

export default Login;
