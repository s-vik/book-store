import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const BookCard = (book) => {
    const { title, author, image, price, addBookToCart, quantityBooks } = book;
    return (
        <Card>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <span>
                    {price} грн.
            </span>
            </Card.Content>
            <Button onClick={addBookToCart.bind(null,book)}>Добавить в корзину {quantityBooks > 0 && `(${quantityBooks})`}</Button>
        </Card>
    )
}

export default BookCard;
