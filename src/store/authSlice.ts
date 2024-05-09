import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from './index'
import axios from '../axios'

interface login {
    email: string,
    password: string
}
interface register {
    email: string,
    password: string
    fullName: string
}

export const fetchAuth = createAsyncThunk(
    'auth/fetchAuth',
    async (params: login) => {
        const { data } = await axios.post('auth/login', params)
        return data
    }
)

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async (params: register) => {
        const { data } = await axios.post('auth/register', params)
        return data
    }
)
export const fetchAuthMe = createAsyncThunk(
    'auth/fetchAuthMe',
    async () => {
        const { data } = await axios.get('/auth/me')
        return data
    }
)

const initialState = {
    data: null,
    loading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.loading = false
                state.data = null
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = true
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.data = null
                state.loading = false
            })
            .addCase(fetchRegister.pending, (state) => {
                state.loading = false
                state.data = null
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = true
            })
            .addCase(fetchRegister.rejected, (state) => {
                state.data = null
                state.loading = false
            })
            .addCase(fetchAuthMe.pending, (state) => {
                state.loading = false
                state.data = null
            })
            .addCase(fetchAuthMe.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = true
            })
            .addCase(fetchAuthMe.rejected, (state) => {
                state.data = null
                state.loading = false
            })
    }
})

export const { logout } = authSlice.actions


interface User {
    _id: string;
    fullName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
export const selectIsAuth = (state: RootState): boolean => Boolean(state.auth.data);
export const selectAuth = (state: RootState): User | null => state.auth.data;

export default authSlice.reducer

