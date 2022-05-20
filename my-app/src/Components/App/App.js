import React, { Component } from 'react'
import AppHeader from "../AppHeader"
import PostAddForm from "../PostAddForm"
import PostList from "../PostList"
import PostStatusFilter from "../PostStatusFilter"
import SearchPanel from "../SearchPanel"
import './App.css'


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: "Going to learn React JS", important: true, id: "qe" },
                { label: "That is so good", important: false, id: "qa" },
                { label: "i need a beak...", important: false, id: "qz" },
            ]
        }
        this.onDelete = this.onDelete.bind(this)
    }

    onDelete (id) {
        this.setState({data: this.state.data.filter(data => data.id !== id)})
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList posts={this.state.data} onDelete={this.onDelete} />
                <PostAddForm />
            </div>
        )
    }
}


