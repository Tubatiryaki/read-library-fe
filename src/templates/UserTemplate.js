import React from "react";
import Footer from "../components/users/common/footer/Footer";
import Header from "../components/users/common/header/Header";

const UserTemplate = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default UserTemplate;
