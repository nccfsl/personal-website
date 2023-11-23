import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Home2 } from "../pages/home2/Home2";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={"/"} element={<Home />} />
        <Route path={"/home2"} element={<Home2 />} />
      </Routes>
    </BrowserRouter>
  );
};
