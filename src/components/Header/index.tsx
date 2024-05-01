import s from './index.module.scss'
import { logout } from '../../store/authSlice'
import { useAppSelector, useAppDispatch } from '../../hook'
import { Link } from 'react-router-dom'
import { decrement, increment } from '../../store/counterSlice'
import { selectIsAuth } from '../../store/authSlice'




const Main = () => {
    const isAuth = useAppSelector(selectIsAuth)
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    const onClickLogout = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
            dispatch(logout())
            window.localStorage.removeItem('token')
        }
        console.log(1)
    }
    return (
        <div className={s.Header}>
            <button onClick={() => console.log(isAuth)}>test state</button>
            <div className={s.head}>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <p>{count}</p>
                {false && [...Array(5)].map(() => <div>123</div>)}
            </div>
            <Link to="auth/login">Войти</Link>
            <div>Создать аккаунт</div>
            <button onClick={() => onClickLogout()}>Выйти</button>
        </div>
    )
}
export default Main