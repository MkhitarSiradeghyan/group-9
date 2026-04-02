import React from 'react'
import s from "./AlcoTypePage.module.sass"
import { useParams } from 'react-router'

const AlcoTypePage = () => {

    const {alco_name} = useParams()

  return (
    <div>{alco_name}</div>
  )
}

export default AlcoTypePage