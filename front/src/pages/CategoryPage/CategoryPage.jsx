import React from "react";
import s from "./CategoryPage.module.sass";
import AlcoholCard from './../../components/AlcoholCard/AlcoholCard';

const CategoryPage = () => {
  return (
    <>
      <section className={s.main} style={{backgroundImage: `url("https://t3.ftcdn.net/jpg/05/74/59/52/360_F_574595275_AuuGUzG52xppbhcbNVxt4kiHe0wbQE6C.jpg")`}}>
        <Container>
            <div className={s.wrap}>
                <Heading level={1} styles={{color: "#fff"}}>Alcohol, Explained.</Heading>
                <Text styles={{color: "#ccc"}}>A simple space to find answers about how alcohol works and its place in our lives.</Text>
                <button className={s.btn}>Take a Look</button>
            </div>
        </Container>
    </section>
      <section className={s.categories}>
      <Container>
        <div className={s.wrap}>
          <div className={s.grid}>
            <AlcoholCard/>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
};

export default CategoryPage;
