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

export const fetchCreatePost = createAsyncThunk<
    { id: string; title: string; text: string; tags: string[] },
    createPost
>('posts/fetchCreatePost', async (params) => {
    const { data } = await axios.post('/posts', params);
    return data;
});
interface PostsState {
    items: { id: string; title: string; text: string; tags: string[] }[];
    loading: boolean;
}

interface createPost {
    title: string,
    text: string
    tags: string[]
}

const initialState: PostsState = {
    items: [],
    loading: false
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
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
            .addCase(fetchCreatePost.pending, (state) => {
                state.loading = false
            })
            .addCase(fetchCreatePost.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = true;
            })
            .addCase(fetchCreatePost.rejected, (state) => {
                state.loading = false
            })
    }
})

export const selectPosts = (state: RootState) => state.posts.items;

export default postsSlice.reducer