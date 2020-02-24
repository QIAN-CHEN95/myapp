import React, { Component } from 'react'
import Nav from './Nav';
import '../App.css'
import {Link} from 'react-router-dom'
export class Header extends Component {
    render() {
        
        return (
            <div className="Header">
            <Link to="/" > <h1>My app</h1> </Link>

            <Nav    />


            </div>


        )
    }
}

export default Header
