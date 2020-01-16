import React, { Component } from 'react'
import MainView from './views/MainView'
import Home from './components/Home'
import {BrowserRouter as Router,Route} from 'react-router-dom'
export class App extends Component {
  render() {
    return (
      <Router>

        <Route path="/" exact component={Home}  />
        <Route  path="/mainview" exact component={MainView}     />
        
      </Router>
 
    )
  }
}



export default App
