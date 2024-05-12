import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from './index'
import axios from '../axios'
import { post, PostsState } from '../assets/inteface'


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const { data } = await axios.get('posts')
        return data
    }
)

export const fetchCreatePost = createAsyncThunk<post, post
>('posts/fetchCreatePost', async (params) => {
    const { data } = await axios.post('/posts', params);
    return data;
});

export const fetchRemovePost = createAsyncThunk<string, string
>('posts/fetchRemovePost', async (id) => {
    await axios.delete(`/posts/${id}`);
    return id
});



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

            //Получение всех статей
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

            //Создание статьи
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

            //Удаление статьи
            .addCase(fetchRemovePost.fulfilled, (state, action) => {
                state.items = state.items.filter(post => post._id !== action.payload);
            })



    }
})

export const selectPosts = (state: RootState) => state.posts.items;

export default postsSlice.reducer