import React, { Component } from 'react'

import {Link} from 'react-router-dom'



export class MainView extends Component {




    render() {

        return (

            <div>
            <Link to="/todos" > <p>Todos</p> </Link>
            <Link to="/blogs" > <p>Blogs</p> </Link>
            </div>

        )
    }
}

export default MainView
