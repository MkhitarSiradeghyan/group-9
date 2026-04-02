import React from 'react'
import s from "./AlcoCategories.module.sass"
import Container from '../Container/Container'
import AlcoTypeCard from '../AlcoTypeCard/AlcoTypeCard'

const AlcoCategories = () => {
  return (
    <section className={s.main}>
      <Container>
        <div className={s.wrap}>
          <div className={s.grid}>
            <AlcoTypeCard/>
            <AlcoTypeCard/>
            <AlcoTypeCard/>
            <AlcoTypeCard/>
            <AlcoTypeCard/>
            <AlcoTypeCard/>
            <AlcoTypeCard/>
            <AlcoTypeCard/>
            <AlcoTypeCard/>
            <AlcoTypeCard/>
            <AlcoTypeCard/>
            <AlcoTypeCard/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AlcoCategories