import axios from "axios"
export async function searchBooks(nameBooks: string){
    const data= await axios.get('https://openlibrary.org/search.json', {
      params: {
        q: nameBooks
      }
    })
    console.log(data)
    return(data)
  }