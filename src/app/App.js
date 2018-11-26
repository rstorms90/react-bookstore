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

  onSearch = async ({ searchTerm, searchType }) => {
    console.log(`${searchTerm}, ${searchType}`)
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
        <Searchbar onSearch={this.onSearch} books={this.state.books} addToCartCallback={this.addToCartCallback}/>

      <hr />
        <BookList items={this.state.books} addToCartCallback={this.addToCartCallback} />
        <div className="shoppingCart">
          <Total item={this.state.cart}/>
          <Total items={this.state.books} />
        </div>
      </main>
    )
  }
}
