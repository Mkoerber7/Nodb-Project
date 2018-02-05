import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import CallApi from "./components/callApi/callApi"
import Header from "./components/header/header"
import Favorites from "./components/Favorites/Favorites"

class App extends Component {
  constructor() {
    super();

    this.state = {
      callApi: true,
      favorites: false
    }

    this.showFavorites = this.showFavorites.bind(this);
   }

   showFavorites() {
     this.setState({callApi: !this.state.callApi, favorites: !this.state.favorites})
   }
  
  render() {
    return (
      <div className="App">
        <Header changeView={this.showFavorites}/>

        <body>


          {this.state.callApi && <CallApi />}
          {this.state.favorites && <Favorites />}
        
        </body>
        
      </div>  

        
    );
  }
}

export default App;
