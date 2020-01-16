import React, { Component } from 'react'
import Header from '../components/Header'
import Todos from '../components/Todos'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Blogs from '../components/Blogs'



export class MainView extends Component {




    render() {

        return (
          <Router>
            <Link to="/components/Todos" Component={Todos}> Todos </Link>
            <div>
            <Header   />

            <Todos/>
            <Blogs             />
            </div>
          </Router>
        )
    }
}

export default MainView
