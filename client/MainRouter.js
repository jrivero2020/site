import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./core/Home";
import { NoMatch } from "./assets/NoMatch";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
export default MainRouter;
