import React from "react";

import Card from "../../templates/card/index";

import ironMan from "../../assets/images/ironman.jpeg";

import "./style.sass";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <i className="icon arrow-left" />
      <div className="cards">
        <Card img="https://www.superherodb.com/pictures2/portraits/10/100/85.jpg" name="Iron Man" />
        <Card img="https://www.superherodb.com/pictures2/portraits/10/100/85.jpg" name="Iron Man" />
        <Card img="https://www.superherodb.com/pictures2/portraits/10/100/85.jpg" name="Iron Man" />
        <Card img="https://www.superherodb.com/pictures2/portraits/10/100/85.jpg" name="Iron Man" />
        <Card img="https://www.superherodb.com/pictures2/portraits/10/100/85.jpg" name="Iron Man" />

        <Card img="https://www.superherodb.com/pictures2/portraits/10/100/85.jpg" name="Iron Man" />
        <Card img="https://www.superherodb.com/pictures2/portraits/10/100/85.jpg" name="Iron Man" />
        <Card img="https://www.superherodb.com/pictures2/portraits/10/100/85.jpg" name="Iron Man" />
        <Card img="https://www.superherodb.com/pictures2/portraits/10/100/85.jpg" name="Iron Man" />
        <Card img="https://www.superherodb.com/pictures2/portraits/10/100/85.jpg" name="Iron Man" />
      </div>
      <i className="icon arrow-right" />
    </div>
  );
};

export default Dashboard;
