import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import AlcoholPage from "./pages/AlcoholPage/AlcoholPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alcohol" element={<AlcoholPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
