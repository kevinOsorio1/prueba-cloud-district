import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppRoute from "./components/AppRoute/AppRoute";
import { AuthProvider } from "./contexts/AuthProvider";
import { GlobalStyles } from "./globals/globalStyles";
import { theme } from "./globals/themes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <>
          <GlobalStyles />
          <Router>
            <DefaultLayout />
            <Suspense fallback={<div>Cargando...</div>}>
              <AppRoute />
            </Suspense>
          </Router>
        </>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
