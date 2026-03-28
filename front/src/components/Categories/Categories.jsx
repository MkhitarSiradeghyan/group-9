import React from 'react'
import s from "./Categories.module.sass"
import Container from '../Container/Container'
import coffee from "../../assets/img/coffee.png"
import tea from "../../assets/img/tea.png"
import alcohol from "../../assets/img/alcohol.png"
import non_alcohol from "../../assets/img/non_alcohol.png"

const Categories = () => {
  return (
    <div className={s.main}>
        <Container>
            <div className={s.wrap}>
                <div className={s.item}>
                    <h3 className={s.title}>Coffee</h3>
                        <img src="https://t4.ftcdn.net/jpg/01/94/82/87/360_F_194828703_vuNjz8Otb66VfI4rQyg9tBUPuGAugsUR.jpg" alt="" />
                        <img src={coffee} alt="" />
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Tea</h3>
                        <img src="https://t4.ftcdn.net/jpg/02/27/88/19/360_F_227881943_SABhdakS4Tz1wrlguNriKjihNf5OVrun.jpg" alt="" />
<img src={tea} alt="" />
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Alcohol</h3>
                        <img src="https://www.artofdrink.com/wp-content/uploads/2010/08/blue-lagoon-cocktail.jpg" alt="" />
<img src={alcohol} alt="" />
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Non Alcohol</h3>
                        <img src="https://png.pngtree.com/thumb_back/fh260/background/20240418/pngtree-strawberry-milkshake-in-the-glass-jar-image_15664412.jpg" alt="" />
<img src={non_alcohol} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Categories