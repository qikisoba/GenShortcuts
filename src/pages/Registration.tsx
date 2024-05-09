import { useAppDispatch, useAppSelector } from '../hook'
import React from 'react';
import { Navigate } from 'react-router-dom'
import { fetchRegister, selectIsAuth } from '../store/authSlice'
const Home = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(selectIsAuth)
    const [input1, setInput1] = React.useState('qawa@gmail.com');
    const [input2, setInput2] = React.useState('artur42r');
    const [input3, setInput3] = React.useState('qawa');
    interface Register {
        email: string,
        password: string,
        fullName: string
    }
    const reg = async (values: Register) => {
        const data = await dispatch(fetchRegister(values))

        if (!data.payload) {
            return alert("Не удалось авторизоваться")
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        } else {
            alert('Ну удалось авторизоваться')
        }
        if (isAuth) {
            return <Navigate to="/" />
        }
    }
    return (
        <>
            <input
                type="text"
                value={input1}
                onChange={e => setInput1(e.target.value)}
            />
            <input
                type="text"
                value={input2}
                onChange={e => setInput2(e.target.value)}
            />
            <input
                type="text"
                value={input3}
                onChange={e => setInput3(e.target.value)}
            />
            <button onClick={() => reg({ email: input1, password: input2, fullName: input3 })}>Зарегистрироваться</button>
        </>
    )
}
export default Home