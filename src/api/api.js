import axios from 'axios';


export const booksAPI = {
    getBooks: () => (
        axios.get('/books.json')
    )
}