import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextInput from '../textInput/TextInput'
import Button from '../button/Button'
import { newTodoTitle } from '../../action/creators'
import './AddTodo.styles.sass'

class AddTodo extends Component {

    render() {
        console.log('add todo props', this.props)

        return (
            <form className="add-todo" onSubmit={this.props.submit}>
                <TextInput className="text-input" placeholder="Enter a title for todo" onChange={this.handleChange}/>
                <Button className="submit-btn" text="ADD" onClick={this.props.submit} />
            </form>
        )
    }
    handleChange = e => {
        this.props.newTodoTitle(e.target.value)
    }
}

export default connect(null, { newTodoTitle })(AddTodo)
