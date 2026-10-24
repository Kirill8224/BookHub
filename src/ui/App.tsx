import { GetBooks } from './GetBooks'
import { Input, Button} from '@mui/material';
import { useState } from 'react';
import { searchBooks } from '../api/SearchBooks';
import type { Data } from '../types';

function App() {
  const [nameBooks, setNameBooks]= useState<string>('')
  const [books, setBooks]= useState<Data | null>(null)
  async function searchBooksForClick(){
    const result= await searchBooks(nameBooks)
    console.log(result)
    setBooks(result)
  }
  return (
    <div>
      <h1>Book Explorer</h1>
      <Input onChange={(e)=>{setNameBooks(e.target.value)}}></Input>
      <Button onClick= {()=>{nameBooks.length > 3 ? searchBooksForClick() : alert('введите название')}}>Найти книги</Button>
      {books != null ? <GetBooks books= {books.docs}/> : <h3>книг не найдено</h3>}
    </div>
  );
}
export default App;