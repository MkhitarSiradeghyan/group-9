import React from "react";
import s from "./AlcoTypeCard.module.sass";

const AlcoTypeCard = () => {
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

export default AlcoTypeCard;
