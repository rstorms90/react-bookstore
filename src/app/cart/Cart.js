import React from 'react'
// import Total from '../total/Total'

const Cart = ({item}) => {
  console.log("in Cart:", item)

  return (<div>
    {/* <span>{this.state.item.title}</span>
           <span>${this.state.item.price}:00</span> */}
    <div>{item}</div>
    <button>Remove</button>
 
    <button>Checkout</button>
  </div>
  )
}

export default Cart