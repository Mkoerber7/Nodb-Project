import React, { Component } from "react";
import axios from "axios";
import "./callApi.css";

export default class CallApi extends Component {
    constructor() {
        super();

        this.state = {
            ingredient: "",
            recipes: [],
        };
        this.getRecipe = this.getRecipe.bind(this);
    }


    getRecipe() {
        axios
            .post("/api/getRecipe", { ingredient: this.state.ingredient })
            .then(response => {
                console.log(response.data);
                   
                
           return this.setState({recipes: 
                response.data });
            }).catch(console.log)
    }

    addFavorites(current) {
     console.log(current);

     axios
     .post("/api/addFavorite", {title: current.title, f2f_url: current.f2f_url})
    }

    render() {
        let title = this.state.recipes.map( (curr, index) => {
            return <ul key = {index}>
            <li>{curr.title}</li>
            <li><a href = {curr.f2f_url}>SEE RECIPE</a></li>
            <button onClick={() => this.addFavorites(curr)}>Add To Favorites</button>
            </ul>
            
        })

        return (
          <div>
            

            <h2>Please Enter The Ingredients You Are Looking To Use</h2>
            <h3>Separated By A Comma (example: chicken, rice, etc.)</h3>

            <input size="35" onChange={(e) => this.setState({ ingredient: e.target.value })}/>

            <button onClick ={this.getRecipe}> Get Recipes </button>
            {title}

          </div>
        )
    }
}