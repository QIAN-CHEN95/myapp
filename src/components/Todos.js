import React, { Component } from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo'
import uuid from 'uuid'



export class Todos extends Component {
    state={
        todos:
        [
          {
            id:uuid.v4(),
            title:'1111111111',
            completed:false
          },
          {
            id:uuid.v4(),
            title:'22222222222',
            completed:true
          },
          {
            id:uuid.v4(),
            title:'3333333333333',
            completed:false
          },
          {
            id:uuid.v4(),
            title:'4444444',
            completed:false
          },
          
        ]
      }


      markComplete=(id)=>{

        console.log(id)
        this.setState({todos: this.state.todos.map(todo=>{
          if (todo.id===id) {
            todo.completed=!todo.completed
          }
          return todo;
    })})
    
    
    }
    delTodo=(id)=>{
      this.setState({todos:[...this.state.todos.filter(todo=> todo.id!==id)]})
    
      
    }
    addTodo=(title)=>{
      console.log(title);
      const newTodo={
        id:uuid.v4(),
        title,
        completed:false
      }
      this.setState({todos: [...this.state.todos,newTodo]})
      
    }
    render() {
        return (
                <div className="todos">
                  <h2 className="todos-title" >Todos list</h2>
                    {this.state.todos.map((todo)=>(
                    <Todo className="todos-i"  key={todo.id}   todo={todo}   markComplete={this.markComplete}  delTodo={this.delTodo}  />
                ))} 
                <AddTodo      addTodo={this.addTodo}     />

                </div>



        )
    }
}

export default Todos
