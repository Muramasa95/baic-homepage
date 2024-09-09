import React from "react";
import Card from "./Card";

const HomeCards: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="p-4 flex justify-center space-x-4 overflow-x-auto">
        <Card
          icon="/src/assets/cards/testdrive-icon-300x291.png"
          text="Test Drive"
          link="/page1"
          alt=""
        />
        <Card
          icon="/src/assets/cards/Brochure-icon-300x291.png"
          text="Brochure"
          link="/page2"
          alt=""
        />
        <Card
          icon="/src/assets/cards/Buynow-icon-300x291.png"
          text="Buy now"
          link="/page3"
          alt=""
        />
        <Card
          icon="/src/assets/cards/Service-icon-300x291.png"
          text="Service"
          link="/page4"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeCards;
