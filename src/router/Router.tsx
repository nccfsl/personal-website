import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
