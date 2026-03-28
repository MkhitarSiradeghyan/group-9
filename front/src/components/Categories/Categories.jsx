import React from 'react'
import s from "./Categories.module.sass"
import Container from '../Container/Container'
import coffee from "../../assets/img/coffee.png"

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
                    <div className={s.img}><img src="https://t4.ftcdn.net/jpg/02/27/88/19/360_F_227881943_SABhdakS4Tz1wrlguNriKjihNf5OVrun.jpg" alt="" /></div>
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Alcohol</h3>
                    <div className={s.img}><img src="https://www.artofdrink.com/wp-content/uploads/2010/08/blue-lagoon-cocktail.jpg" alt="" /></div>
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Non Alcohol</h3>
                    <div className={s.img}><img src="https://png.pngtree.com/thumb_back/fh260/background/20240418/pngtree-strawberry-milkshake-in-the-glass-jar-image_15664412.jpg" alt="" /></div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Categories