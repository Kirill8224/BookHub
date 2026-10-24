import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchBooks } from "./api/SearchBooks";
import type { Data } from './types.ts'
const initialState: Data= {
    docs: [],
    q: ''
}
export const fetchBooks= createAsyncThunk(
    'books/get',
     async (nameBooks: string)=>{
        const res= await searchBooks(nameBooks)
        return(res)
    }
)
const bookSlice= createSlice({
   name: 'Books',
   initialState,
    reducers: {
        }
        }
)

export default bookSlice.reducer
