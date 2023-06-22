import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import PagesContainer from "./PagesContainer";
import Saved from "./savedSneakers";

export enum RouterList {
  Home = "/",
  Saved = "/saved-sneakers",
  Default = "*",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterList.Home} element={<PagesContainer />}>
          <Route path={RouterList.Home} element={<Home />}></Route>
          <Route path={RouterList.Saved} element={<Saved />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
