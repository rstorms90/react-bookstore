import React from 'react'

const CartItem = (props) => {
    return (
        <div className="row">
            <div className="col-sm-6">{props.book.title}</div>
            <div className="col-sm-6"><strong>Price: </strong>${props.book.price}.00</div>
            <hr className="col-sm-6" />
        </div>
    )
}

export default CartItem