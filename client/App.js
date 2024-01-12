import React from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { hot } from "react-hot-loader";

console.log("Estoy en app");
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div> Despues de ThemeProvider y dentro de App</div>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default hot(module)(App);
