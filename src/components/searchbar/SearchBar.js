import React from 'react'

export default class SearchBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    onSearchChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        const searchType = ev.target.searchType.value
        const { searchTerm } = this.state

        this.props.onSearch({ searchTerm, searchType })
        this.setState({
            searchTerm: ''
        })
    }
    
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/">Russ' Bookstore</a>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input type="radio" id="author" name="searchType" value="Author" defaultChecked />
                        <label htmlFor="author">Author</label>
                    </div>
                    <div>
                        <input type="radio" id="title" name="searchType" value="Title" />
                        <label htmlFor="title">Title</label>
                    </div>

                    <input onChange={this.onSearchChange} type="text" name="searchbar" placeholder="Search..." />
                    <input type="submit" placeholder="Submit" />
                </form>
                <button onClick={this.props.onReset} id="reset">Reset</button>
            </div>
        )
    }
}