import React from "react";
import s from "./AlcoTypePage.module.sass";
import { useParams } from "react-router";
import Container from "../../components/Container/Container";
import Heading from "../../components/Heading/Heading";
import gin from "../../assets/img/gin.png"
import Text from "../../components/Text/Text";

const AlcoTypePage = () => {
  const { id } = useParams();

  return (
    <main className={s.main}>
      <section className={s.hero}>
        <div className={s.hero_img}>
          <img src="https://t4.ftcdn.net/jpg/14/87/83/23/360_F_1487832310_S7Y4Hyd2w4f6F0aSZ9Qv8NK4jSdHbEg3.jpg" alt="" />
          <img src={gin} alt="" />
        </div>
        <Container>
          <div className={s.hero_wrap}>
            <div className={s.hero_block}>
              <Heading styles={{color: "#fff"}} level={1}>{id}</Heading>
              <Text styles={{color: "#ccc"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam deserunt non modi quod? Temporibus, iste!</Text>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AlcoTypePage;
