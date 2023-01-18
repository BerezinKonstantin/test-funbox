import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

function CardList({ foodlist }) {
  return (
    <ul className="cardList">
      {foodlist.map((food) => (
        <Card food={food} key={food._id} />
      ))}
    </ul>
  );
}

export default CardList;
