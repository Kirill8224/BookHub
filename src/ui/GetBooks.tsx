import { Card } from "@mui/material"
import type { Book } from "../types"
export function GetBooks({books}: {books: Book[]}){
    if(books){
    return books.map((book)=>{
      return(<Card sx={{m: 1}} key={book.key}>
      <h2>{book.title}</h2>
      <h4>автор: {book.author_name}</h4>
      <p>год выпуска: {book.first_publish_year}</p>
      </Card>)
    })}
  }