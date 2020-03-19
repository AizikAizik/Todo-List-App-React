import React from 'react'

const Todos = ({ todos, deleteTodo }) =>{

    const todolist = todos.length? (
        todos.map(todo => {
            return (
                <div className="collection-item teal lighten-2 z-depth-2" key = {todo.id}>
                    <span onClick = {() => { deleteTodo(todo.id) }}>{ todo.content }</span>
                </div>
            )
        })
    )
     :
     (<div className = "center">
         <img className="responsive-img" src="completed-task.png" style = {{width: "60", height:"90px" }} />
             <p className="center">Completed your Todos Yay!!!</p>
     </div>
 )

     console.log(todos.length)

    return (
        <div className="todos collection">
            { todolist }
        </div>
    )
}


export default Todos;
