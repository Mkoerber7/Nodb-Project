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

    render() {
        let title = this.state.recipes.map( (curr, index) => {
            return <ul key = {index}>
            <li>{curr.title}</li>
            <li><a href = {curr.f2f_url}>SEE RECIPE</a></li>
            </ul>
        });
        return (
            <div>
             {title}
            </div>
           
        )
    }
}