import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import CallApi from "./components/callApi/callApi"
import Header from "./components/header/header"

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />

        <body>

          <h2>Please Enter The Ingredients You Are Looking To Use</h2>
          <h3>Separated By A Comma (example: chicken, rice, etc)</h3>

          <CallApi />
        
        </body>
        
      </div>  

        
    );
  }
}

export default App;
