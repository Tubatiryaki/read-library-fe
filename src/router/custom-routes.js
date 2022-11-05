import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/user/common/auth/Login/Login";
import Register from "../components/user/common/auth/register/Register";
import UserTemplate from "../templates/user-template";
import ContactPage from "../pages/visitor/ContactPage";

import HomePage from "../pages/visitor/HomePage";


import LibraryPage from "../pages/visitor/LibraryPage";
import AccountPage from "../pages/user/AccountPage";
import NotFound from "../components/common/not-found/NotFound";
import UserInformationPage from "../pages/user/UserInformationPage";
import PrivacyPolicyPage from "../pages/user/PrivacyPolicyPage";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="library-page" element={<UserTemplate><LibraryPage /></UserTemplate>} />
          <Route path="contact-page" element={<UserTemplate><ContactPage /></UserTemplate>} />
          <Route path="privacy-policy" element={<UserTemplate><PrivacyPolicyPage/></UserTemplate>}/>
          <Route path="account" element={<UserTemplate><AccountPage/></UserTemplate>}/>
          <Route path="login" element={<UserTemplate><Login/></UserTemplate>} />
          <Route path="register" element={<UserTemplate><Register /></UserTemplate>} />
          <Route path="userInformation" element={<UserTemplate><UserInformationPage /></UserTemplate>} />
          <Route path="notfound" element={<NotFound />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
