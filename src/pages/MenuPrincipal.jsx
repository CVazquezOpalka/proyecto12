import React from "react";
import { Navegation } from "../components/NavBar/NavBar";
import { Light } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

export const MenuPrincipal = () => {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Navegation />
      </ThemeProvider>
    </main>
  );
};
