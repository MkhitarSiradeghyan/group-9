import React from 'react'
import s from "./AlcoHero.module.sass"
import Container from '../Container/Container'
import Heading from '../Heading/Heading'
import Text from '../Text/Text'

const AlcoHero = () => {
  return (
    <section className={s.main} style={{backgroundImage: `url("https://www.thespiritsbusiness.com/content/uploads/2022/08/spirits-web.jpg")`}}>
        <Container>
            <div className={s.wrap}>
                <Heading level={1} styles={{color: "#fff"}}>Alcohol, Explained.</Heading>
                <Text styles={{color: "#ccc"}}>A simple space to find answers about how alcohol works and its place in our lives.</Text>
                <button className={s.btn}>Take a Look</button>
            </div>
        </Container>
    </section>
  )
}

export default AlcoHero