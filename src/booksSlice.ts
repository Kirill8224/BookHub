import { searchBooks } from "./api/SearchBooks";
import type { Data } from './types.ts'
import { createAppSlice } from "./createAppSlices.ts";
const initialState: Data= {
    docs: [],
    q: '',
    loading: false,
    error: false
}
const booksReducer= createAppSlice({
    name: 'BooksSlise',
    initialState,
    reducers: (create)=>({
        fetchBooks: create.asyncThunk(
            async (action: string)=>{
                const res= await searchBooks(action)
                return(res)
            }, 
            {
                pending: (state)=>{
                    state.loading= true
                    state.error= false
                },
                fulfilled: (state, action)=>{
                    state.docs= action.payload.docs
                    state.q= action.payload.q
                    state.loading= false
                    state.error= false
                },
                rejected: (state)=>{
                    state.error= true
                    state.loading= false
                }
            }
        )
    })
        }
)

export const fetchBooks= booksReducer.actions.fetchBooks
export default booksReducer.reducer
 

