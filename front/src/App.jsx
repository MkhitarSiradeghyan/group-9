import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DrinkPage from "./pages/DrinkPage/DrinkPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:id" element={<DrinkPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
