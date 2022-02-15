import React from "react";
import "../../pages/Home/Home.css"
import ContactAndMap from "../../Components/ContactAndMap";
import UpperBody from "../../Components/UpperBody";
import MiddleBody from "../../Components/MiddleBody";
import LowerBody from "../../Components/LowerBody";

const Home = () => {
  return (
    <div>
      <UpperBody/>
      <MiddleBody/>
      <LowerBody/>
      <ContactAndMap />
    </div>
  );
};
export default Home;
