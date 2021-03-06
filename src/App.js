import React, { Component } from 'react';
import Todos from './Todos'
import AddForm from './AddForm'

class App extends Component {

    state = {
        todos : [
            { id: 1, content: "Buy some Milk" },
            { id: 2, content: "Play Music" }
        ]
    }

    render(){
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo List</h1>
                <Todos todos = { this.state.todos } deleteTodo = {this.deleteTodo} />
                <AddForm  appendToDo = { this.appendToDo }/>
            </div>
        );
    }

    deleteTodo = (id) =>{
        const todos = this.state.todos.filter( todo => todo.id !== id )

        this.setState({ todos : todos })
    }

    appendToDo = ( todo ) =>{
        todo.id = Math.random(); //generate new random id to get unique value
        //use spread operator to append old todo's array values with the new todo array
        let todos = [...this.state.todos, todo];
        this.setState({ todos }) // set new todos state
    }

}

export default App;
