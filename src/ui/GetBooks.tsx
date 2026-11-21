import { Books } from './Book';
import { Button } from '@mui/material';
import {  useAppSelector } from '../hooks';
import { booksRus } from '../api/selector';
import { useState } from 'react';
export function GetBooks(){
  const books= useAppSelector((state)=> state.booksState.docs)
  const rusBooks= booksRus(books)
  const [rus, setRus]= useState<boolean>(false)
  const hundleClick= (status: boolean)=>{
    if(status === true){
      setRus(false)
    }
    if(status === false){
      setRus(true)
    }
  }
    if(books && books.length > 0){
    return(<>
      <Button onClick={()=>{hundleClick(rus)}}>{rus ? 'книги на всех языках' : 'книиги на русском'}</Button>
      {rusBooks && rus ? <Books books= {rusBooks}/> : <Books books= {books}/>}
     </>
    )
  }
    else{
      return (<h2>книг не найдено</h2>)
    }
  }