import React, { Component } from 'react'

class AddForm extends Component{
    state = {
        content : ""
    }

    render(){
        return (
            <div>
                <form onSubmit = { this.handleSubmit }>
                    <label>Add Todo Item</label>
                    <input type = "text"  onChange = { this.handleChange } value = { this.state.content }/>
                </form>
            </div>
        );
    }

    handleChange = (event) =>{
        this.setState({ content : event.target.value })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.appendToDo(this.state);
        this.setState({ content : "" }) // reset the content of the state object
    }

}

export default AddForm
