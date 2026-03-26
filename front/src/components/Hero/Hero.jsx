import React from 'react'
import s from "./Hero.module.sass"
import hero from "@/assets/img/hero.jpg"
import Container from './../Container/Container';

const Hero = () => {
  return (
    <section className={s.hero} style={{backgroundImage: `url("${hero}")`}}>
        <Container>
            <div className={s.wrap}>
                <h1 className={s.title}>{import.meta.env.VITE_COMPANY_NAME}</h1>
                <button className={s.btn}>Explore Drinks</button>
            </div>
        </Container>
    </section>
  
  )
}

export default Hero