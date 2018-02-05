import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

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
                let info = response.data;
                let title = info.map( (curr, index) => {
                    return <ul>
                    <li key = {index}>{curr.title}</li>
                    <li key = {index}><a href = {curr.f2f_url}>{curr.f2f_url}</a></li>
                    </ul>
                    
                })   
                
           return this.setState({recipes: 
                title });
            }).catch(console.log)
    }

    



    render() {

        return (
          <div>

            <input onChange={(e) => this.setState({ ingredient: e.target.value })}/>

            <button onClick ={this.getRecipe}> Get Recipes </button>
            {this.state.recipes}

          </div>
        )
    }
}