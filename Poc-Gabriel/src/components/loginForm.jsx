import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LoginForm() {
  const navigate = useNavigate();

  return (
    <Box
      component="div"
      sx={{
        width: "25wh",
        height: "55vh",
        backgroundColor: "white",
        position: "absolute",
        left: "40%",
        top: "30%",
        borderRadius: "8px",
        padding: "6.8rem",
      }}
    >
      <FormControl margin="normal">
        <motion.h2 initial={{ y: -350 }} animate={{ y: 0 }}>
          <Typography variant="h2">Sign in</Typography>
        </motion.h2>
        <motion.div
          initial={{ x: -1150 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <TextField id="outlined-email" label="Email" variant="outlined" />
        </motion.div>
        <motion.div
          initial={{ x: -1150 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <TextField
            id="outlined-password"
            label="password"
            variant="outlined"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Aceito os termos de uso"
          />
        </motion.div>
        <motion.div initial={{ y: 300 }} animate={{ y: 0 }}>
          <Button
            variant="contained"
            sx={{
              width: "250px",
              backgroundColor: "#3f51b5",
            }}
            onClick={() => {
              navigate("/DashBoard");
            }}
          >
            Logar
          </Button>
        </motion.div>
      </FormControl>
    </Box>
  );
}

export default LoginForm;
