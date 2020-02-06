import React, { Component } from 'react'
import Nav from './Nav';
import '../App.css'
export class Header extends Component {
    render() {
        
        return (
            <div className="Header">
            <h1>My App</h1>
            <Nav    />


            </div>


        )
    }
}

export default Header
