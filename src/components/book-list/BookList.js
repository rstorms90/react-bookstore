import React from 'react'
import Book from './Book'
import './bookList.css'

const BookList = (props) => {
    return (
        <div>
            <h1 className="bookList">Book List</h1>
            <ul>
                {props.bookList.map(
                    (book, idx) => {
                        return <Book onCart={props.getCart} key={idx} book={book} />
                    }
                )}
            </ul>
        </div>
    )
}

export default BookList