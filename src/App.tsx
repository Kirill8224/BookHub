import { GetBooks } from './ui/GetBooks';
import { Input, Button} from '@mui/material';
import { useState } from 'react';
import { searchBooks } from './api/SerchBooks';

function App() {
  const [nameBooks, setNameBooks]= useState<string>('')
  const [books, setBooks]= useState<any>(null)
  async function searchBooksForClick(){
    const result= await searchBooks(nameBooks)
    setBooks(result)
  }
  return (
    <div>
      <h1>Book Explorer</h1>
      <Input onChange={(e)=>{setNameBooks(e.target.value)}}></Input>
      <Button onClick= {()=>{nameBooks ? searchBooksForClick() : alert('введите название')}}>Найти книги</Button>
      {books != null ? <GetBooks books= {books.docs}/> : <h3>книг не найдено</h3>}
    </div>
  );
}
export default App;