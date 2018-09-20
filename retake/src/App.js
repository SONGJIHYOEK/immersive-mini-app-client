import React, { Component } from 'react';
import {Route,  BrowserRouter as Router} from 'react-router-dom';
import Main from './component/Main';
import Author from './component/Author';
import Photo from './component/Photo'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <div>
         <Route path="/main" component={Main}/>
         <Route path="/photo/:id/:author" component={Photo}/> 
         <Route path="/author/:author" component={Author}/>          
        </div>
      </Router>  
      </div>
    );
  }
}

export default App;

