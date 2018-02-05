import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import CallApi from "./components/callApi/callApi"

class App extends Component {
  // constructor() {
  //   super();

  //   // this.state={
  //   //   recipes: [],


  //   // }
  // }
  // componentDidMount() {
  //   axios.get('http://localhost:3210/api/getRecipes').then(response => {
  //     console.log(response);
  //   });
  // }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Finder</h1>
        </header>

        <body>

          <h2>Please Enter The Ingredients You Are Looking For</h2>
          <h3>Separated By A Comma (example: chicken, rice)</h3>

          <CallApi />
        
        </body>
        
      </div>  

        
    );
  }
}

export default App;
