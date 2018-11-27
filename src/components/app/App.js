import React, { Component } from 'react'
import './App.css'
import BookList from '../book-list/BookList'
import Searchbar from '../searchbar/SearchBar'
import Cart from '../cart/Cart'
// import Total from './total/Total'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookList: [],
      cart: []
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

  getCart = (ev) => {
    let bookId = ev.target.id
    console.log(bookId)

    this.setState({
      cart: bookId
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
      <main className="App">
        <Searchbar onSearch={this.onSearch} books={this.state.books} onReset={this.getBookList} />

      <hr />
        <BookList getCart={this.getCart} bookList={this.state.bookList} />
        <div className="shoppingCart">
          <Cart onCart={this.getCart} />
        </div>
      </main>
    )
  }
}
