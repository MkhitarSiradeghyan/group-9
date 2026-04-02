import React from 'react'
import s from "./Text.module.sass"

const Text = ({children, styles}) => {
  return (
    <p className={s.text} style={styles}>{children}</p>
  )
}

export default Text