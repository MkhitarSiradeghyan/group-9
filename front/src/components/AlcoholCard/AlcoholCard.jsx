import React from "react";
import s from "./AlcoholCard.module.sass";

const AlcoholCard = () => {
  return (
    <div className={s.card}>
      <div className={s.card_img}>
        <img
          src="https://pngimg.com/d/whisky_PNG85.png"
          alt=""
        />
      </div>
      <div className={s.card_name}>Whiskey</div>
    </div>
  );
};

export default AlcoholCard;
