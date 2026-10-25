import { GetBooks } from './GetBooks'
import { Input, Button} from '@mui/material';
import { useState } from 'react';
import { fetchBooks } from '../booksSlice';
import { useAppDispatch } from '../hooks';

function App() {
  const [nameBooks, setNameBooks]= useState<string>('')
  const [loading, setLoading]= useState<boolean>(false)
  const dispatch= useAppDispatch()
   const habdleClick= async ()=>{
    await dispatch(fetchBooks(nameBooks))
    setLoading(true)
   }
  return (
    <div>
      <h1>Book Explorer</h1>
      <Input onChange={(e)=>{setNameBooks(e.target.value)}}></Input>
      <Button onClick= {()=>{nameBooks.length > 2 ? habdleClick() : alert('введите название')}}>Найти книги</Button>
      {loading && <GetBooks />}
    </div>
  );
}
export default App;

