import s from './index.module.scss'
import { logout } from '../../store/authSlice'
import { useAppSelector, useAppDispatch } from '../../hook'
import { Link } from 'react-router-dom'
import { selectAuth } from '../../store/authSlice'




const Main = () => {


    const Auth = useAppSelector(selectAuth)
    const dispatch = useAppDispatch()
    const onClickLogout = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
    }
    return (
        <div className={s.Header}>
            <button><Link to="/">Главная</Link></button>
            <div>
                {Auth && <button><Link to="create">Создать</Link></button>}

                {Auth && <button>{Auth.email}</button>}

                {!Auth && <button><Link to="auth/login">Войти</Link></button>}

                <button><Link to="auth/register">Создать аккаунт</Link></button>

                {Auth && <button onClick={() => onClickLogout()}>Выйти</button>}
            </div>
        </div >
    )
}
export default Main