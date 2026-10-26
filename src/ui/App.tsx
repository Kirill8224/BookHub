import { GetBooks } from './GetBooks'
import { Input, Button} from '@mui/material';
import { useState } from 'react';
import { fetchBooks } from '../booksSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

function App() {
  const [nameBooks, setNameBooks]= useState<string>('')
  const [ok, setOk]= useState<boolean>(false)
  const loading= useAppSelector((state)=>state.booksState.loading)
  const dispatch= useAppDispatch()
   const habdleClick= async ()=>{
    setOk(true)
    await dispatch(fetchBooks(nameBooks))
   }
   const error= useAppSelector((state)=>state.booksState.error)
  return (
    <div>
      <h1>Book Explorer</h1>
      <Input onChange={(e)=>{setNameBooks(e.target.value)}}></Input>
      <Button onClick= {()=>{nameBooks.length > 2 ? habdleClick() : alert('введите название')}}>Найти книги</Button>
      {loading ? <h1>загрузка</h1> : ok && <GetBooks />}
      {error && <h1 style={{color: 'red'}}>ошибка</h1>}
    </div>
  );
}
export default App;

