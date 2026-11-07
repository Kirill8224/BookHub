import type { Book } from "../types";
import { createSelector } from "@reduxjs/toolkit";
const allBooks= (books: Book[])=>{return(books)}
export const booksRus= createSelector([allBooks], (books)=>{return(books.filter((book)=>{return(book.language.includes('rus'))}))})

