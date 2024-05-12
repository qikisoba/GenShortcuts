import { configureStore } from '@reduxjs/toolkit'
import posts from './postsSlice'
import auth from './authSlice'
import short from './shortSlice'

export const store = configureStore({
    reducer: {
        posts,
        auth,
        short
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch