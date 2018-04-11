import React, { Component } from "react";
import axios from "axios";
import Footer from "../Footer/Footer"
import "./Favorites.css"


export default class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            updatedTitle: []
        };
    }


    componentDidMount() {
        axios.get("/api/saveFavorite").then(response => {
        console.log(response.data)
        return this.setState({recipes: response.data})
        }
        )};

    deleteFavorite(curr, index) {
        axios.delete("/api/deleteFavorite", {data: {title: curr.title, f2f_url: curr.f2f_url}}).then(response => {
            console.log(response.data)
            return this.setState({recipes: response.data})
        })
    }

    updateTitle(curr, index) {
        console.log(this.state.updatedTitle);
        axios.put("/api/updateTitle", {title: this.state.updatedTitle, f2f_url: curr.f2f_url}).then(response => {
            console.log(response.data);
            this.setState({recipes: response.data})
            this.deleteFavorite(curr, index);
        })
    }

    render() {
        console.log(this.state.recipes);
        let favoriteRecipes = this.state.recipes.map( (curr, index) => {
            return <ul key = {index}>
            <li>{curr.title}</li>
            <li><a href = {curr.f2f_url}>SEE RECIPE</a></li>
            <button onClick={() => this.deleteFavorite(curr, index)}>Remove From Favorites</button>
            <br/>
            <input onChange={(e) => this.setState({updatedTitle: e.target.value})}/><button onClick = {() => this.updateTitle(curr, index)}>Update Title</button>
            </ul>
        });
        return (
            <div>
            <div className="fav-container">
            {favoriteRecipes}
            </div>
             <Footer />
            </div>
           
        )
    }
}