import React from "react";
import s from "./AlcoholPage.module.sass";
import AlcoHero from "../../components/AlcoHero/AlcoHero";
import AlcoCategories from './../../components/AlcoCategories/AlcoCategories';

const AlcoholPage = () => {
  return (
    <>
      <AlcoHero />
      <AlcoCategories/>
    </>
  );
};

export default AlcoholPage;
