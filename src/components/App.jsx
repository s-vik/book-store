import React from 'react';

import TopMenu from '../containers/Menu';
import { Container, Card } from 'semantic-ui-react'
import BookCard from '../containers/card';
import Filter from '../containers/Filter';


const App = ({ books, isReady}) => (
  <Container>
        <TopMenu />
        <Filter/>
        <div className='margTop'>
          <Card.Group itemsPerRow={4}>
            {!isReady ?
              'Loading...'
              : books.map((book, index) => <BookCard key={index} {...book} />)}
          </Card.Group>
        </div>
      </Container>
);


export default App;

