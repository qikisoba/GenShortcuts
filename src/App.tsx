import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import React from 'react'

import { fetchAuthMe, /* selectIsAuth */ } from './store/authSlice'
import { useAppDispatch, /* useAppSelector */ } from './hook'
function App() {
  const dispatch = useAppDispatch()
  // const isAuth = useAppSelector(selectIsAuth)
  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="/auth/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
