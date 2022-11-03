import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/user/common/auth/Login/Login";
import Register from "../components/user/common/auth/register/Register";
import UserTemplate from "../templates/user-template";
import ContactPage from "../pages/visitor/ContactPage";

import HomePage from "../pages/visitor/HomePage";


import LibraryPage from "../pages/visitor/LibraryPage";
import AccountPage from "../pages/user/AccountPage";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="library-page" element={<UserTemplate><LibraryPage /></UserTemplate>} />
          <Route path="contact-page" element={<UserTemplate><ContactPage /></UserTemplate>} />
          <Route path="login" element={<UserTemplate><Login/></UserTemplate>} />
          <Route path="register" element={<UserTemplate><Register /></UserTemplate>} />




        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
