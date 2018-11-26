import React from 'react'

const Book = ({ item, addToCartCallback}) => {

    const addItemToCart = (ev) => {
        let values = ev.target.value
        addToCartCallback(values)
    }

    const date = item.published.split('T')[0]
    const published = `${date.split('-')[1]}/${date.split('-')[2]}/${date.split('-')[0]}`

    return (
        <div>
            <div className="book">
                <div><b>Title:</b> <i>{item.title}</i></div>
                <div><i>{item.subtitle}</i></div>
                <br />
                <div><b>Author:</b> {item.author}</div>
                <br />
                <div><b>Page #:</b> {item.pages}</div>
                <br />
                <div><b>Publisher:</b> {item.publisher}</div>
                <br />
                <div><b>Published:</b> {published}</div>
                <br />
                <a href={item.website} target="/" >{item.website}</a>
                <br />
                <div className="price">${item.price}.00</div>
                <br />
                <button onClick={addItemToCart} id={item.id}>Add to Cart</button>
                <hr />
                <br />
            </div>
        </div>
    )
}

export default Book