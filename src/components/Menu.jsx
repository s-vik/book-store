import React from 'react'
import { Menu,  Popup, List, Button, Image } from 'semantic-ui-react'

const CartComponent = ({ title, id, image, removeBookFromCart }) => {
  return (
    <List selection divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button onClick={removeBookFromCart.bind(null, id)} color="red">
            Удалить
          </Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content>{title}</List.Content>
      </List.Item>
    </List>
  );
}


 const TopMenu = ({totalPrice, quantityBooks, items}) => {
    return (
      <Menu>
        <Menu.Item
          name='browse'
        >
          Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
          >
            Итого: &nbsp; <b>{totalPrice}</b>&nbsp; грн.
          </Menu.Item>
          <Popup
        trigger={
          <Menu.Item
            name='help'
          >
            Корзина (<b>{quantityBooks}</b>)
          </Menu.Item>
        }
        content={items.map(book => (
          <CartComponent {...book} />
        ))}
        on="click"
        hideOnScroll
      />
          
        </Menu.Menu>
      </Menu>
    )
}

export default TopMenu;