import React, { Component } from 'react'

import {Link} from 'react-router-dom'



export class MainView extends Component {




    render() {

        
        return (

            <div className="container">
            <Link to="/todos" > <p className="content-item">Todos</p> </Link>
            <Link to="/blogs" > <p className="content-item">Blogs</p> </Link>
            </div>

        )
    }
}

export default MainView
