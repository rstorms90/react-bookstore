import React from 'react'
import Book from '../book-list/Book'
// import Total from '../total/Total'

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    return (
    <div>
        <ul>
          {this.props.cart.map(
            (book, idx) => {
              return <Book key={idx} book={book} />
            }
          )}
        </ul>
      <button>Remove</button>
   
      <button>Checkout</button>
    </div>
    )
  }
}
