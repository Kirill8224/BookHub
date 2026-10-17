import axios from 'axios';

function App() {
  async function searchBooks() {
    const response = await axios.get(
      'https://openlibrary.org/search.json',
      {
        params: {
          q: 'harry potter',
        },
      }
    );

    console.log(response.data);
  }

  return (
    <div>
      <h1>Book Explorer</h1>

      <button onClick={searchBooks}>
        Найти книги
      </button>
    </div>
  );
}

export default App;
