import React from "react";

import Header from "../../components/header/index";
import Search from "../../components/search/index";
import Dashboard from "../../components/dashboard/index";
import SlideBar from "../../components/slidebar/index";

import "./style.sass";

const Home = () => (
  <div className="home-page">
    <div className="row">
      <Header />
      <Search />
    </div>
    <Dashboard />
    <SlideBar />
  </div>
);

export default Home;
