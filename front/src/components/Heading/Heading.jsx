import React from "react";
import s from "./Heading.module.sass";

const Heading = ({ children, level = 1, styles }) => {
  const Title = `h${level}`;
  return <Title className={s.title} style={styles}>{children}</Title>;
};

export default Heading;