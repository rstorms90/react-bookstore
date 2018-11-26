import React from 'react'
import CartItems from './CartItems'

const CartItemsList = ({ items }) => {
    console.log(items)
    return <ul>{items.map((x, y) => <CartItems id={y} key={y} item={x} />)}</ul>
}

export default CartItemsList