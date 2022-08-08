import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { CartPage } from "./pages/cart";
import { ItemPage } from "./pages/item-page/ItemPage";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Home />} />
            <Route path="item/:id" element={<ItemPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<Navigate to={"/all"} replace />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
