import React, { Component } from 'react'

export class AddBlog extends Component {
    state={
        title:'',
        bloger:'',
        content:'',
    }
onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    
}
onSubmit=(e)=>{ 
    e.preventDefault();
    this.props.addBlog(this.state)
    this.setState({title:'',bloger:'',content:''})
}
    render() {


        return (
            <div className="add-blog"> 
                <form  onSubmit={this.onSubmit}   >
                <input type="text" placeholder="add Title..." name="title" value={this.state.title} onChange={this.onChange} />
                <input type="text" placeholder="add bloger"  name="bloger" value={this.state.bloger} onChange={this.onChange}  /> <br></br>
                <textarea className="add-blog-content"  placeholder="add blog content..."  name="content" value={this.state.content} onChange={this.onChange}     />
                <input type="submit" value="Submit"   />
                </form>

            </div>
        )
    }
}

export default AddBlog
