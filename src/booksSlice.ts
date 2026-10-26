import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchBooks } from "./api/SearchBooks";
import type { Data } from './types.ts'
const initialState: Data= {
    data: {
    docs: [],
    q: ''},
    loading: false,
    error: false
}
export const fetchBooks= createAsyncThunk<Data, string>(
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
            state.data.docs= action.payload.data.docs
            state.data.q= action.payload.data.q
            state.loading= false
        })
        builder.addCase(fetchBooks.pending, (state)=>{
            state.loading= true
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


