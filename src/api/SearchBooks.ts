
import type { DataResponseApi } from "../types"
import axios from "axios"
const api= import.meta.env.VITE_API
export async function searchBooks(nameBooks: string){
    const data= await axios.get<DataResponseApi>(api, {
      params: {
        q: nameBooks
      }
    })
    console.log(data.data)
    return(data.data)
  }