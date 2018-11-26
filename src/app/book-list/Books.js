import React from 'react'
import Item from './BookList'

const ItemList = ({ items }) => {
    return (
        <span>
            {items.map((item, idx) => <Item key={idx} id={item.id} item={item} />)}
        </span>
    )
}

export default ItemList