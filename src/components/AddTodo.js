import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:''
    }
onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}
onSubmit=(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title:''})
}
    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <input    type="text"    onChange={this.onChange} name="title" value={this.state.title}  />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default AddTodo
