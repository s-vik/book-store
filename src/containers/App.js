
import { connect } from 'react-redux';
import App from './../components/App';
import * as booksAction from '../actions/books';
import { bindActionCreators } from 'redux';

import orderBy from 'lodash/orderBy';


const filterWithLodash = (books, filterBy) => {
  switch (filterBy) {
    case 'all':
      return books
    case 'price_high':
      return orderBy(books, 'price', 'desc')
    case 'price_low':
      return orderBy(books, 'price', 'asc')
    case 'author':
      return orderBy(books, 'author', 'asc')
    case 'alphabet':
      return orderBy(books, 'title', 'asc')
    default:
      return books
  }
}

const queryFilter = (books, searchQuery) => {
  return books.filter(o =>
    o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
    o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );
}

const searchBooks = (books, filterBy, searchQuery) => {
  return filterWithLodash(queryFilter(books,searchQuery),filterBy);
}

const mapStateToProps = ({books, filter}) => {
  return {
    books: books.books && searchBooks(books.books, filter.filterBy,filter.searchQuery) ,
    isReady: books.isReady
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(booksAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
