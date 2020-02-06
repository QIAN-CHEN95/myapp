import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'


export default function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/">
                <li className="nav-links">Home</li>
                </Link>
                <Link to="/todos">
                <li className="nav-links">Todos</li>
                </Link>
                <Link to="/blogs">
                <li className="nav-links">Blogs</li>
                </Link>

            </ul>
        </nav>
    )
}
