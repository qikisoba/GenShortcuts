import { configureStore } from '@reduxjs/toolkit'
import counter from './counterSlice'
import posts from './postsSlice'
import auth from './authSlice'
import short from './shortSlice'

export const store = configureStore({
    reducer: {
        counter,
        posts,
        auth,
        short
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch