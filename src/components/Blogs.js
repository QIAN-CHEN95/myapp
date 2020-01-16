import React, { Component } from 'react'

export class Blogs extends Component {
    state={
        blogs:[
            {
                title:'test 1',
                content:'111111111111',
                bloger:'test1'
            },
            {
                title:'test 2',
                content:'2222222222',
                bloger:'test2'
            },
            {
                title:'test 3',
                content:'3333333',
                bloger:'test3'
            },
        ]
        }
    render() {
        return (
            <div>
                {this.state.blogs.map((blog)=>(

                    <p>  {blog.title} </p>
                    ))}
            </div>
        )
    }
}

export default Blogs
