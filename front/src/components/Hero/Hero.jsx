import React from 'react'
import s from "./Hero.module.sass"
import cocktail from "@/assets/img/cocktail.png"
import Container from './../Container/Container';

const Hero = () => {
  return (
    <>
    <section className={s.hero}>
        <Container>
            <div className={s.wrap}>
                <h1 className={s.title}>Alcohol</h1>
                <img src={cocktail} alt="Cocktail" />
            </div>
       
            <div className={s.wrap}>
                <h1 className={s.title}>Coffee</h1>
            </div>
       
            <div className={s.wrap}>
                <h1 className={s.title}>Tea</h1>
            </div>
       
            <div className={s.wrap}>
                <h1 className={s.title}>Fresh Drinks</h1>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Hero