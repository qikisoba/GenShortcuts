import { configureStore } from '@reduxjs/toolkit'
import counter from './counterSlice'
import post from './postsSlice'
import auth from './authSlice'

export const store = configureStore({
    reducer: {
        counter,
        post,
        auth
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch