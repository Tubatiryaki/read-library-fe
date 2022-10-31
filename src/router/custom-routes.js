import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/user/common/auth/Login/Login";
import HomePage from "../pages/visitor/HomePage";


import LibraryPage from "../pages/visitor/LibraryPage";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="library-page" element={<LibraryPage />} />
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
