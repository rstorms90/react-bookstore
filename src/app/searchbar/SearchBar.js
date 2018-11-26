import React from 'react'
import SearchList from './SearchResultsList'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            _book: []
        }
    }

    filterSearch = (ev) => {
        ev.preventDefault()

        let input = ev.target[2].value
        let author = ev.target[0].checked
        let title = ev.target[1].checked
        let books = this.props.books
        let results = []


        ////CHECK INPUTS OF SEARCH\\\\
        if (author === true && title === true) {
            alert(`Select 'Author' or 'Title'`)
        } else if (author === true && title === false) {


        ////CHECK BOOKS AUTHORS\\\\
        books.forEach((result) => {
            if (result.author.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
                // console.log(`Authors:`, searchResult.author)
                results.push(result)
                this.setState({
                    ...this.state,
                    _book: results,
                    get Book() {
                        return this._book
                    },
                    set book(val) {
                        this._book = val
                    }
                })
            }
        })
        } else if (title === true && author === false) {
            books.forEach((result) => {
                if (result.title.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
                    // console.log(`Titles:`, searchResult.title)
                    results.push(result)
                    this.setState({
                        ...this.state,
                        book: results
                    })
                }
            })
        } else {
            alert("Select a search option")
        }
    }
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/">Russ' Bookstore</a>
                <form onSubmit={filterSearch}>
                    <div>
                        <input type="checkbox" id="author" name="Author" value="Author" defaultChecked />
                        <label htmlFor="author">Author</label>
                    </div>
                    <div>
                        <input type="checkbox" id="title" name="Title" value="Title" />
                        <label htmlFor="title">Title</label>
                    </div>

                    <input type="text" placeholder="Search..." />
                    <input type="submit" placeholder="Submit" />
                </form>
                <SearchList book={this.state.book}/>
            </div>
        )
    }
}