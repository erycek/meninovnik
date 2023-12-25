import React from "react";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
};
export default Main;
