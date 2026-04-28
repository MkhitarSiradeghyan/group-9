import React from 'react'
import s from "./Button.module.sass"

const Button = ({children, type="button", url="/", isButton=true, styles={}}) => {
  return isButton ?
  <button type={type} className={s.button}>{children}</button> :
  <Link to={url} className={s.button}>{children}</Link>
}

export default Button