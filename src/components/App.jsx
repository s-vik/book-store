import React from 'react';
import axios from 'axios';

import TopMenu from '../containers/Menu';
import { Container, Card } from 'semantic-ui-react'
import BookCard from '../containers/card';
import Filter from '../containers/Filter';

class App extends React.Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    })
  }
  render() {
    const { books } = this.props;
    return (
      <Container>
        <TopMenu />
        <Filter/>
        <div className='margTop'>
          <Card.Group itemsPerRow={4}>
            {!this.props.isReady ?
              'Loading...'
              : books.map((book, index) => <BookCard key={index} {...book} />)}
          </Card.Group>
        </div>
      </Container>
    );
  }
}

export default App;

