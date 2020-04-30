import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './../components/App';

import orderBy from 'lodash/orderBy';
import { getBooks } from '../reducers/books';


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


class AppContainer extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return (
      <App {...this.props}/>
    )
  }
}


const mapStateToProps = ({books, filter}) => {
  return {
    books: books.books && searchBooks(books.books, filter.filterBy,filter.searchQuery) ,
    isReady: books.isReady
  }
}

export default connect(mapStateToProps, {getBooks})(AppContainer);
