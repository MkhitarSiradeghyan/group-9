import React from 'react'
import s from './Input.module.sass'

const Input = ({type, placeholder, name, error}) => {
  return (
    <div className={s.input}>
        <input type={type} placeholder={placeholder} name={name}/>
        {
            error && <p className={s.error}>{error}</p>
        }
    </div>
  )
}

export default Input