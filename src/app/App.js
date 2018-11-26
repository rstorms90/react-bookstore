import React, { Component } from 'react'
import './App.css'
import BookList from './book-list/BookList'
import Searchbar from './searchbar/SearchBar'
import Total from './total/Total'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.apibase = 'http://localhost:8082/api'
    this.state = {
      books: [],
      cart: []
    }
  }

  async componentDidMount() {
    const response = await fetch(`${this.apibase}/books`)
    if (response.status === 200) {
      let res = await response.json()

      this.setState({
        ...this.state,
        books: res
      })
    } else {
      console.log('broken fetch', response)
      throw new Error('broken GET')
    }
  }

  addItemToCart(book) {
    console.log('added to cart:', book)
  }

  render() {
    return (
      <main className="App">
        <Searchbar books={this.state.books} />

      <hr />
        <BookList items={this.state.books} addItemToCart={this.state.addItemToCart} />
        <div className="shoppingCart">
        {/* Shopping List */}
        <Total items={this.state.books} />
        <button>Checkout</button>
        </div>
      </main>
    )
  }
}
