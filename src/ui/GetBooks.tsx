export function GetBooks({books}: {books: any}){
    return books.map((book: any)=>{
      return(<h3>{book.title}</h3>)
    })
  }