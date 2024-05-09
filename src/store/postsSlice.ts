import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from './index'
import axios from '../axios'


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const { data } = await axios.get('posts')
        return data
    }
)
interface PostsState {
    items: [];
    loading: boolean;
}
const initialState: PostsState = {
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

export const selectPosts = (state: RootState) => state.posts.items;

export default postsSlice.reducer