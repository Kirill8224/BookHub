import type { Book } from "../types"
export function GetBooks({books}: {books: Book[]}){
    if(books){
    return books.map((book)=>{
      return(<h3 key={book.key}>{book.title}</h3>)
    })}
  }