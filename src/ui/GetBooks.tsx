import { Card } from "@mui/material"
import {  useAppSelector } from '../hooks';
export function GetBooks(){
  const books= useAppSelector((state)=> state.booksState.data.docs)
    if(books.length > 0){
    return books.map((book)=>{
      return(<Card sx={{m: 1}} key={book.key}>
      <h2>{book.title}</h2>
      <h4>автор: {book.author_name}</h4>
      <p>год выпуска: {book.first_publish_year}</p>
      </Card>)
    })}
    else{
      return (<h2>книг не найдено</h2>)
    }
  }