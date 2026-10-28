import type { DataResponseApi } from "../types"
import axios from "axios"
export async function searchBooks(nameBooks: string){
    const data= await axios.get<DataResponseApi>('https://openlibrary.org/search.json', {
      params: {
        q: nameBooks
      }
    })
    console.log(data.data)
    return(data.data)
  }
  