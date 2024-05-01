import { useAppDispatch, useAppSelector } from '../hook'
import React from 'react';
import { Navigate } from 'react-router-dom'
import { fetchAuth, selectIsAuth } from '../store/authSlice'
const Home = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(selectIsAuth)
    const [input1, setInput1] = React.useState('dgoskiy@gmail.com');
    const [input2, setInput2] = React.useState('artur42r');
    const auth = async (values: { email: string, password: string, }) => {
        const data = await dispatch(fetchAuth(values))

        if(!data.payload){
            return alert("Не удалось авторизоваться")
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        } else {
            alert('Ну удалось авторизоваться')
        }
        // console.log(dispatch(fetchAuth(values)))
    }
    if (isAuth) {
        return <Navigate to="/" />
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
            <button onClick={() => auth({ email: input1, password: input2 })}>Войти</button>
        </>
    )
}
export default Home