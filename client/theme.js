import { createTheme } from "@mui/material/styles";
import { blue, red, green, pink } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      light: "#5c67a3",
      main: "#3f4771",
      dark: "#2e355b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff79b0",
      main: "#ff4081",
      dark: "#c60055",
      contrastText: "#000",
    },
    error: {
      main: "#D32F2F",
    },
    background: {
      default: "#FFF",
    },
    openTitle: "#3f4771",
    protectedTitle: pink["400"],
    type: "light",
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    useNextVariants: true,
  },
});

export default theme;
