import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchBooks } from "./api/SearchBooks";
import type { Data, DataResponseApi } from './types.ts'
const initialState: Data= {
    docs: [],
    q: '',
    loading: false,
    error: false
}
export const fetchBooks= createAsyncThunk<DataResponseApi, string>(
    'fetchBooks', 
    async (action)=>{
        const res= await searchBooks(action)
        return(res)
    }
)

const booksReducer= createSlice({
    name: 'BooksSlise',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchBooks.fulfilled, (state, action)=>{
            state.docs= action.payload.docs
            state.q= action.payload.q
            state.loading= false
            state.error= false
        })
        builder.addCase(fetchBooks.pending, (state)=>{
            state.loading= true
            state.error= false
        })
        builder.addCase(fetchBooks.rejected, (state)=>{
            state.error= true
            state.loading= false
        })

    },
    reducers: {}
        }
)

export default booksReducer.reducer


