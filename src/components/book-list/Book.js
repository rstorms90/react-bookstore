import React from 'react'

const Book = (props) => {

    const date = props.book.published.split('T')[0]
    const published = `${date.split('-')[1]}/${date.split('-')[2]}/${date.split('-')[0]}`

    return (
        <div>
            <div className="book">
                <div><b>Title:</b> <i>{props.book.title}</i></div>
                <div><i>{props.book.subtitle}</i></div>
                <br />
                <div><b>Author:</b> {props.book.author}</div>
                <br />
                <div><b>Pages:</b> {props.book.pages}</div>
                <br />
                <div><b>Publisher:</b> {props.book.publisher}</div>
                <br />
                <div><b>Published:</b> {published}</div>
                <br />
                <a href={props.book.website} target="/" >{props.book.website}</a>
                <br />
                <div className="price">${props.book.price}.00</div>
                <br />
                <button id={props.book.id}>Add to Cart</button>
                <hr />
                <br />
            </div>
        </div>
    )
}

export default Book