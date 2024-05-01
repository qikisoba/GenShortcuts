import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../axios'


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const { data } = await axios.get('posts')
        return data
    }
)

const initialState = {
    items: [],
    loading: false
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = false
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.items = action.payload
                state.loading = true
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.items = []
                state.loading = false
            })
    }
})

export default postsSlice.reducer