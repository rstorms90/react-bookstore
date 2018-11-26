
import React from 'react'
import BookList from './BookList'

const BookItemsList = ({ items }) => {
    if (items.length === 0) {
        return false
    } else {
        return (
            <span>
            {items.map((item, idx) => <BookList id={idx} key={idx} item={item} />)}
            </span>
        )
    }
}

export default BookItemsList