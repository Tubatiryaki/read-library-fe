import React from "react";
import BreadCrump from "../../../components/admin/common/BreadCrump";
import Loaning from "../../../components/admin/loan/Loaning";
import UserUpdateForm from "../../../components/admin/users/UserUpdateForm";

const UserEditPage = () => {
  return (
    <>
      <BreadCrump />
      <UserUpdateForm />
      <Loaning />
    </>
  );
};

export default UserEditPage;
