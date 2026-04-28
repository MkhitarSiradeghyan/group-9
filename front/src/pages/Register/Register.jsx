import React from 'react'
import s from './Register.module.sass'
import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

const Register = () => {
  return (
    <div className={s.register}>
        <Container>
            <div className={s.wrap}>
                <div className={s.side}>
                    <Heading level={1}>Create an Account</Heading>
                    <form className={s.form}>
                        <Input type="email" name="email" placeholder="Email"/>
                        <Input type="password" name="password" placeholder="Password"/>
                        <Button type="submit" >Create</Button>
                    </form>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Register