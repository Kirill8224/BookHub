import type { Book } from "../types"
import { Card } from "@mui/material"

export const Books = ({books}: {books: Book[]})=>{
return(books.map((book)=>{return(
    <Card sx={{m: 1}} key={book.key}>
    <h2>{book.title}</h2>
    <h4>автор: {book.author_name}</h4>
    <p>год выпуска: {book.first_publish_year}</p>
    </Card>)}))
  }