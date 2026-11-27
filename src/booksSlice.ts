import { searchBooks } from "./api/SearchBooks";
import type { Data } from './types.ts'
import { createAppSlice } from "./createAppSlices.ts";
const initialState: Data= {
    docs: [],
    q: '',
    loading: false,
    error: false,
    errorMessage: null
}
const booksReducer= createAppSlice({
    name: 'BooksSlise',
    initialState,
    reducers: (create)=>({
        fetchBooks: create.asyncThunk.withTypes<{rejectValue: string}>()(
            async (action: string, thunkApi)=>{
                try {
                const res= await searchBooks(action)
                return(res)
                    
                } catch (error) {
                    return(thunkApi.rejectWithValue('ошибка сервера'))
                }
            }, 
            {
                pending: (state)=>{
                    state.loading= true
                    state.error= false
                    state.errorMessage= null
                },
                fulfilled: (state, action)=>{
                    state.docs= action.payload.docs
                    state.q= action.payload.q
                    state.error= false
                    state.errorMessage= null
                },
                rejected: (state, action)=>{
                    state.error= true
                    state.errorMessage ?? action.payload
                },
                settled: (state)=>{
                    state.loading= false
                }
            }
        )
    })
        }
)

export const fetchBooks= booksReducer.actions.fetchBooks
export default booksReducer.reducer
 

