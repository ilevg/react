import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context'
import MyButton from '../UI/buttons/MyButton'
import MyInput from '../UI/inputs/MyInput'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = e => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Login' />
                <MyInput type="password" placeholder='Password'/>
                <MyButton>Log in</MyButton>
            </form>
        </div>
    )
}

export default Login
