import React from 'react'
import CartItem from './CartItem'

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    return (
    <div>
      <h2>Cart Total: ${this.props.total}.00</h2>
        <ul>
          {this.props.cart.map(
            (book, idx) => {
              return <CartItem key={idx} book={book} />
            }
          )}
        </ul>
      <button>Checkout</button>
    </div>
    )
  }
}
