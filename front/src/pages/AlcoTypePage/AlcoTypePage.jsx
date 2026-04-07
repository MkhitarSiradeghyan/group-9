import React from "react";
import s from "./AlcoTypePage.module.sass";
import { useParams } from "react-router";
import Container from "../../components/Container/Container";
import Heading from "../../components/Heading/Heading";
import gin from "../../assets/img/gin.png";
import gin_prod from "../../assets/img/gin_prod.png";
import Text from "../../components/Text/Text";

const AlcoTypePage = () => {
  const { id } = useParams();

  return (
    <main className={s.main}>
      <section className={s.hero}>
        <div className={s.hero_img}>
          <img
            src="https://t4.ftcdn.net/jpg/14/87/83/23/360_F_1487832310_S7Y4Hyd2w4f6F0aSZ9Qv8NK4jSdHbEg3.jpg"
            alt=""
          />
          <img src={gin} alt="" />
        </div>
        <Container>
          <div className={s.hero_wrap}>
            <div className={s.hero_block}>
              <Heading styles={{ color: "#fff" }} level={1}>
                {id}
              </Heading>
              <Text styles={{ color: "#ccc" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam deserunt non modi quod? Temporibus, iste!
              </Text>
            </div>
          </div>
        </Container>
      </section>
      <section className={s.history}>
        <Container>
          <div className={s.history_wrap}>
            <div className={s.history_img}>
              <img
                src="https://sacredgin.com/cdn/shop/articles/Gin_Lane_1200x1200.png?v=1657638959"
                alt="Gin history"
              />
            </div>
            <div className={s.history_block}>
              <Heading level={2}>History</Heading>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae, dolorum. Velit fugit id blanditiis! Mollitia, animi
                optio error similique excepturi deleniti, eos eligendi est
                reiciendis hic quos eius distinctio voluptatum sed delectus
                officia dolorum! Culpa veniam illo excepturi officiis non
                deleniti reiciendis, rem molestias blanditiis. Sapiente odio
                laudantium temporibus perferendis nihil nobis inventore quae
                corporis possimus enim necessitatibus vel, harum quaerat aut
                fugit sint, libero obcaecati eligendi facilis quidem dolorem.
                Consectetur unde odio exercitationem asperiores veritatis quas
                assumenda sed vitae dolorem consequatur, cupiditate aliquid
                architecto fuga soluta reiciendis modi vero accusantium
                doloribus minus a reprehenderit optio sequi. Nesciunt, animi at!
              </Text>
            </div>
          </div>
        </Container>
      </section>
      <section className={s.factory}>
        <Container>
          <div className={s.factory_wrap}>
            <Heading level={2}>Gin Production Process</Heading>
            <div className={s.factory_img}>
              <img src={gin_prod} alt="" />
            </div>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto vel iure at incidunt. Fugit id ullam voluptate voluptatibus nobis, natus hic ipsam nesciunt cumque temporibus dicta eos ea ipsa commodi quas nam neque ab blanditiis aspernatur, provident qui? Eos facere magnam commodi aperiam soluta accusamus! Quia dignissimos dolorum dolores harum temporibus dolore ducimus, explicabo, repudiandae cum consectetur nam. Earum harum, nisi nesciunt voluptate vel molestiae neque. Dolorum officiis accusantium totam cupiditate, error perferendis laboriosam sint nisi recusandae reiciendis eum similique cum, magnam, voluptatem fugit dolorem deserunt minima odit labore facilis consequuntur. Odit unde eligendi error earum molestias eum id beatae autem? Autem distinctio, consectetur neque quae numquam voluptas minima laboriosam officia assumenda ipsa eius est beatae impedit, dolores qui tempora omnis fugiat quos deleniti dicta soluta. Fugit cupiditate animi corporis aliquid. At, recusandae fugiat. Libero, deleniti unde mollitia animi nobis, alias ex reiciendis commodi quisquam at illum dignissimos. Voluptatem ipsum odit ut nesciunt neque maxime corporis, quas beatae voluptate in totam ex, esse nam quod quaerat non atque natus quasi odio aperiam quis. Quaerat, unde? Incidunt quibusdam nihil ipsa minima odit voluptatem consectetur cupiditate velit et excepturi ut fugiat reiciendis maxime beatae tempora, voluptates facilis nostrum libero sint quod.</Text>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AlcoTypePage;
