import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchBooks } from "./api/SearchBooks";
import type { Data } from './types.ts'
const initialState: Data= {
    docs: [],
    q: ''
}
export const fetchBooks= createAsyncThunk<Data, string>(
    'booksGet',
    async (nameBook: string): Promise<Data>=>{
        const res= await searchBooks(nameBook)
        return(res)
    }
    
)
const booksReducer= createSlice({
   name: 'Books',
   initialState,
   extraReducers: (builder)=>{
    builder.addCase(fetchBooks.fulfilled, (state, action)=>{
        state.docs= action.payload.docs
        state.q= action.payload.q
    })
   },
    reducers: {
        }
        }
)

export default booksReducer.reducer


