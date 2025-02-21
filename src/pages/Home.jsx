import React from "react";
import "../styles/Home.scss";
import AppartmentsList from "../components/AppartmentsList";

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-img">
        <img src="/images/background.webp" alt="" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <AppartmentsList />
    </div>
  );
};

export default Home;
