import React, { Component } from "react";
import axios from "axios";


export default class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
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

    render() {
        console.log(this.state.recipes);

        let title = this.state.recipes.map( (curr, index) => {
            return <ul key = {index}>
            <li>{curr.title}</li>
            <li><a href = {curr.f2f_url}>SEE RECIPE</a></li>
            <button onClick={() => this.deleteFavorite(curr, index)}>Remove From Favorites</button>
            </ul>
        });
        return (
            <div>
             {title}
            </div>
           
        )
    }
}