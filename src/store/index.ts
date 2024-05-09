import { configureStore } from '@reduxjs/toolkit'
import counter from './counterSlice'
import posts from './postsSlice'
import auth from './authSlice'

export const store = configureStore({
    reducer: {
        counter,
        posts,
        auth
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch