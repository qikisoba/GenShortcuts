import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from './index'

import { shortState } from '../assets/inteface'


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
        decrement: (state, action) => {
            const indexToRemove = action.payload; // Порядковый номер элемента для удаления
            state.items.splice(indexToRemove, 1);
        },
        disShort: (state) => {
            state.items = []
        }
    },

})

export const { increment, decrement, disShort } = shortSlice.actions



export const selectShort = (state: RootState) => state.short.items;
export default shortSlice.reducer