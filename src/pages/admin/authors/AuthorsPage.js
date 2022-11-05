import React from "react";
import Authors from "../../../components/admin/author/Authors";
import AuthorSearch from "../../../components/admin/author/AuthorSearch";

const AuthorsPage = () => {
  return (
    <>
      <AuthorSearch />
      <Authors />
    </>
  );
};

export default AuthorsPage;
