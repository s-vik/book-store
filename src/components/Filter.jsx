import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

const Filter = ({setFilterBy,filterBy,searchQuery,setSearchQuery}) => {
  return (
    <Menu secondary>
      <Menu.Item
        active={filterBy === 'all'}
        onClick={setFilterBy.bind(null,'all')}
      >Все</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_high'}
        onClick={setFilterBy.bind(null,'price_high')}
      >Цена(дорогие)</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_low'}
        onClick={setFilterBy.bind(null,'price_low')}
      >Цена(дешевые)</Menu.Item>
      <Menu.Item
        active={filterBy === 'author'}
        onClick={setFilterBy.bind(null,'author')}
      >Автор</Menu.Item>
      <Menu.Item
        active={filterBy === 'alphabet'}
        onClick={setFilterBy.bind(null,'alphabet')}
      >В алфавитном порядке</Menu.Item>
      <Menu.Item>
      <Input icon='search' onChange={(e)=>setSearchQuery(e.target.value)} value={searchQuery} placeholder='Введите запрос...'/>
      </Menu.Item>

    </Menu>
  )
}
export default Filter;