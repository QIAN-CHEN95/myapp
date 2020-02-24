import React, { Component } from 'react'
import Blog from './Blog'
import AddBlog from './AddBlog'
import uuid from 'uuid'

export class Blogs extends Component {
    state={
        blogs:[
            {
                id:1,
                title:'English',
                content:'content of English ',
                bloger:'English john'
            },
            {
                id:2,
                title:'Maths',
                content:'content of Maths',
                bloger:'Maths well'
            },
            {
                id:3,
                title:'History',
                content:'content of History',
                bloger:'History petter'
            },
        ]
        }
    delBlog=(id)=>{
        this.setState({blogs:[...this.state.blogs.filter(blog=> blog.id!==id)]})
        
        
    }
    addBlog=(blog)=>{
        console.log(blog);
        const newBlog={
            id:uuid.v4(),
            title:blog.title,
            content:blog.content,
            bloger:blog.bloger
        }
        this.setState({blogs:[...this.state.blogs,newBlog]})
        
      }
    render() {
        return (
            <div className="blogs">
                {this.state.blogs.map((blog)=>(


                    <Blog   key={blog.id}  blog={blog} delBlog={this.delBlog}  addBlog={this.addBlog} />
                    ))}
                <AddBlog addBlog={this.addBlog} />
            </div>
        )
    }
}

export default Blogs
