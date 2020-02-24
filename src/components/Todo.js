import React, { Component } from 'react'

export class Todo extends Component {




    getStyle=()=>{
        return{
            textDecoration:this.props.todo.completed? 'line-through':'none',
        }
    }


    render() {
        return (

            <p className="todo" style={this.getStyle()}>
                <input type="checkbox"   onChange={this.props.markComplete.bind(this,this.props.todo.id)}   />
                {this.props.todo.title}
                <button onClick={this.props.delTodo.bind(this,this.props.todo.id)}>x</button>

            </p>

        )
    }
}

export default Todo
