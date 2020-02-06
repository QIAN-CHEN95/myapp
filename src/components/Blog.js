import React from 'react'

export default function Blog(props) {

    return (
        <div>
            
           <h3>  {props.blog.title} </h3> 
           <p>  {props.blog.content} --- by bloger : {props.blog.bloger} </p> 
           <button onClick={props.delBlog.bind(this, props.blog.id)} >delete</button>
        </div>
    )
}
