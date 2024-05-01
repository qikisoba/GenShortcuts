import Header from '../components/Header'
import { useAppDispatch } from '../hook'
import React from 'react'
import { Outlet } from "react-router-dom"
import { fetchPosts } from '../store/postsSlice'
const Home = () => {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])


    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default Home