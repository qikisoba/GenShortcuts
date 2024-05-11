import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './index'


interface shortState {
    items: { short: [], path: string }[];
}

const initialState: shortState = {
    items: [],
}

export const shortSlice = createSlice({
    name: 'short',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.items.push(action.payload);
        },
    },
})

export const { increment } = shortSlice.actions


export const selectShort = (state: RootState) => state.short.items;
export default shortSlice.reducer
