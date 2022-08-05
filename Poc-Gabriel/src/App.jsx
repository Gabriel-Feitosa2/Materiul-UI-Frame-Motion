import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserProvider } from "./context/userContext";
import Router from "./routes";

function App() {
  const theme = createTheme({
    palett: {
      primary: {
        main: "#3f51b5",
      },
    },
    typography: {
      h1: {
        fontStyle: "Montserrat",
        fontWeight: "Regular",
      },
      h2: {
        fontStyle: "Montserrat",
        fontWeight: "SemiBold",
      },
      subtitle1: {
        fontStyle: "Montserrat",
        fontWeight: "bold",
      },
      button: {
        fontStyle: "Roboto",
        fontWeight: "bold",
      },
    },
  });
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
