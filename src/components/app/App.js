import React, { Component } from 'react'
import './App.css'
import BookList from '../book-list/BookList'
import Searchbar from '../searchbar/SearchBar'
// import Total from './total/Total'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookList: []
    }
  }

  async componentDidMount() {
    await this.getBookList()
  }

  async getBookList() {
    ////GET BOOKS\\\\
    const bookListJson = await fetch(`${process.env.REACT_APP_API_URL}/books`)
    let bookList = await bookListJson.json()

    this.setState({ bookList })
  }

  onSearch = async ({ searchTerm, searchType }) => {
    // console.log(`${searchTerm}, ${searchType}`)
    const bookListJson = await fetch(`${process.env.REACT_APP_API_URL}/books`)
    let bookList = await bookListJson.json()
    let result
    switch (searchType) {
      case 'title':
        result = bookList.filter((book) => {
          return (book.title.includes(searchTerm))
        })
        this.setState({
          bookList: result
        })
        break
      case 'author':
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

  // addItemToCart(book) {
  //   console.log('added to cart:', book)
  // }

  render() {
    return (
      <main className="App">
        <Searchbar onSearch={this.onSearch} books={this.state.books} />

      <hr />
        <BookList bookList={this.state.bookList} />
        <div className="shoppingCart">

        </div>
      </main>
    )
  }
}
