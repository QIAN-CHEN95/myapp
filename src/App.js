import React, { Component } from 'react'
import MainView from './views/MainView'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Todos from './components/Todos'
import Blogs from './components/Blogs'
import Header from './components/Header'
import './App.css'

export class App extends Component {
  render() {
    return (
      <Router>
        <Header      />
        <Switch>
        <Route path="/" exact component={MainView}  />
        <Route path="/todos" exact component={Todos}   />
        <Route path="/blogs" exact component={Blogs}            />
        </Switch>
      </Router>
 
    )
  }
}



export default App
