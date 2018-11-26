import React from 'react'
import Book from './Book'

const BookList = ({ items, addToCartCallback }) => {
    if (items.length === 0) {
        return false
    } else {
        return (
            <span>
            {items.map((item, idx) => <Book id={idx} key={idx} item={item} addToCartCallback={addToCartCallback} />)}
            </span>
        )
    }
}

export default BookList