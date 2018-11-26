import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        let searchResult
        const filterSearch = (ev) => {
            ev.preventDefault()

            let input = ev.target[2].value
            let author = ev.target[0].checked
            let title = ev.target[1].checked
            let books = this.props.books

            ////CHECK INPUTS OF SEARCH\\\\
            if (author === true && title === true) {
                alert("Select 'Author' or 'Title'")
            } else if (author === true && title === false) {
                console.log("Author", input)

            ////CHECK BOOKS AUTHORS\\\\
            books.forEach((book) => {
                if (book.author.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
                    
                    searchResult = book
                    console.log("Search", searchResult.title)
                    return searchResult
                }
            })
            } else if (title === true && author === false) {
                books.forEach((book) => {
                    if (book.title.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
                        searchResult = book
                        return searchResult
                    }
                })
            } else {
                alert("Select a search option")
            }
        }
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
                <div className="searchResult">
                    {searchResult}
                </div>
            </div>
        )
    }
}