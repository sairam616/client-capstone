import React from "react";
import "../../pages/Home/Home.css"
import ContactAndMap from "../../Components/home/ContactAndMap";
import UpperBody from "../../Components/home/UpperBody";
import MiddleBody from "../../Components/home/MiddleBody";
import LowerBody from "../../Components/home/LowerBody";

const Home = () => {
  return (
    <div>
      <UpperBody />
      <MiddleBody />
      <LowerBody />
      <ContactAndMap />
    </div>
  );
};
export default Home;
