import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Create from './pages/Create'
import { Route, Routes } from 'react-router-dom'
import React from 'react'

import { fetchAuthMe, /* selectIsAuth */ } from './store/authSlice'
import { useAppDispatch, /* useAppSelector */ } from './hook'
function App() {
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Registration />} />
        <Route path="/create" element={<Create />} />
      </Route>
    </Routes>
  )
}

export default App
