import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import AlcoholPage from "./pages/AlcoholPage/AlcoholPage";
import AlcoTypePage from "./pages/AlcoTypePage/AlcoTypePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alcohol" element={<AlcoholPage />} />
        <Route path="/alcohol/:alco_name" element={<AlcoTypePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
