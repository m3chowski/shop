import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { CartPage } from "./pages/cart";
import { ItemPage } from "./pages/item-page/ItemPage";
import { Order } from "./pages/order/Order";

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
            <Route path="/item/:id" element={<ItemPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cart/order" element={<Order />} />
            <Route path="*" element={<Navigate to={"/all"} replace />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
