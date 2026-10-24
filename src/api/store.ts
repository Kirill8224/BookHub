import { configureStore } from "@reduxjs/toolkit";
import  booksReducer  from "../booksSlice";
export const stores= configureStore({
    reducer: {
        booksState: booksReducer
    }
})
export type RootState= ReturnType<typeof stores.getState>
export type AppDispatch= typeof stores.dispatch