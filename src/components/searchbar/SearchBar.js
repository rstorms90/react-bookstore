import React from 'react'
import './SearchBar.css'

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
                <a className="active bookstore" href="/">Russ' Bookstore</a>
                <form onSubmit={this.onSubmit}>
                    <span>
                        <input type="radio" id="author" name="searchType" value="Author" defaultChecked />
                        <label htmlFor="author">&nbsp; Author &nbsp;</label>
                    </span>
                    <span>
                        <input type="radio" id="title" name="searchType" value="Title" />
                        <label htmlFor="title">&nbsp;Title</label>
                    </span>
                    <div>
                    <input className="searchbar" onChange={this.onSearchChange} type="text" name="searchbar" placeholder="Search..." /> &nbsp;
                    <input className="formButtons" type="submit" placeholder="Submit" />
                    </div>
                </form>
                <button className="formButtons" onClick={this.props.onReset} id="reset">Reset</button>
            </div>
        )
    }
}