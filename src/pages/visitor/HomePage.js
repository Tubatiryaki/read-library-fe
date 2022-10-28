import React from "react";
import HomeSearch from "../../components/user/home/home-search/HomeSearch";
import MenuBar from "../../components/user/home/menubar/MenuBar";
import TopBar from "../../components/user/home/topbar/TopBar";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <MenuBar />
      <HomeSearch />
    </div>
  );
};

export default HomePage;
