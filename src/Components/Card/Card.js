import React, { useState } from "react";
import "./Card.css";

function Card({ food }) {
  const [isSelect, setIsSelect] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const selectHandler = () => {
    setIsSelect(!isSelect);
  };
  const hoverHandler = () => {
    setIsHover(!isHover);
  };
  const disableHandler = () => {
    setIsDisabled(!isDisabled);
  };
  const cardStatusClass =
    (isDisabled ? " disabled" : "") ||
    (isSelect && isHover ? " selected_hover" : "") ||
    (isSelect ? " selected" : "") ||
    (isHover ? " hover" : "");

  return (
    <div className="card__wrap">
      <div className={"card__border" + cardStatusClass}>
        <div
          className={isDisabled ? "card card_disabled" : "card"}
          onClick={selectHandler}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
          onDoubleClick={disableHandler}
        >
          <p
            className={
              isHover && isSelect && !isDisabled
                ? "card__subtitle card__subtitle-hover"
                : "card__subtitle"
            }
          >
            {isHover && isSelect && !isDisabled
              ? "Котэ не одобряет?"
              : food.subtitle}
          </p>
          <h1 className="card__title">{food.title}</h1>
          <h2 className="card__taste">{food.taste}</h2>
          <p className="card__text">
            {food.portions}
            <br />
            {food.gift}
          </p>
          <div className={"card__circle" + cardStatusClass}>
            <p className="card__weight">{food.weight}</p>
            <p className="card__unit">кг</p>
          </div>
        </div>
      </div>
      {(isDisabled && (
        <p className="card__buy_text card__buy_text-disabled">
          Печалька, {food.taste} закончился
        </p>
      )) ||
        (isSelect ? (
          <p className="card__buy_text">{food.consist}</p>
        ) : (
          <p className="card__buy_text">
            Чего сидишь? Порадуй котэ,{" "}
            <span className="card__buy_button" onClick={selectHandler}>
              купи.
            </span>
          </p>
        ))}
    </div>
  );
}

export default Card;
