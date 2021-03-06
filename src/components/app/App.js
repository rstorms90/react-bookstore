import React, { Component } from 'react'
import './App.css'
import BookList from '../book-list/BookList'
import Searchbar from '../searchbar/SearchBar'
import Cart from '../cart/Cart'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookList: [],
      cart: [],
      total: 0
    }
  }

  componentDidMount = async () => {
    await this.getBookList()
  }

  getBookList = async () => {
    ////GET BOOKS\\\\
    const bookListJson = await fetch(`${process.env.REACT_APP_API_URL}/books`)
    let bookList = await bookListJson.json()

    this.setState({ bookList })
  }

  getCart = async (ev) => {
    let bookId = ev.target.id
    const bookListJson = await fetch(`${process.env.REACT_APP_API_URL}/books`)
    let bookList = await bookListJson.json()
    
    let result = bookList.filter((book) => {
      return book.id == bookId
    })

    this.setState({
      ...this.state,
      cart: this.state.cart.concat(result),
      total: (this.state.cart.length + 1) * 5
    })
  }

  onSearch = async ({ searchTerm, searchType }) => {
    // console.log(`${searchTerm}, ${searchType}`)
    const bookListJson = await fetch(`${process.env.REACT_APP_API_URL}/books`)
    let bookList = await bookListJson.json()
    let result
    switch (searchType) {
      case 'Title':
        result = bookList.filter((book) => {
          return (book.title.includes(searchTerm))
        })
        this.setState({
          bookList: result
        })
        break
      case 'Author':
        result = bookList.filter((book) => {
          return (book.author.includes(searchTerm))
        })
        this.setState({
          bookList: result
        })
        break
      default:

    }
  }

  render() {
    return (
      <main className="App container">
        <Searchbar onSearch={this.onSearch} onReset={this.getBookList} />
      <hr />
        <div className="row">
          <div className="backing col-sm-6">
            <BookList getCart={this.getCart} bookList={this.state.bookList} />
          </div>
          <div className="shoppingCart backing col-sm-6">
            <Cart onCart={this.getCart} cart={this.state.cart} total={this.state.total} />
          </div>
        </div>
      </main>
    )
  }
}