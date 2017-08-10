import React, { Component } from 'react'
import TextInput from '../textInput/TextInput'
import Button from '../button/Button'
import { fire } from '../../action/creators'
import './Modal.styles.sass'

export default class Modal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todoNewTitle: this.props.item.title
        }
    }

    render() {
        return (
            <div className="modal">
                <TextInput className="input" value={this.state.todoNewTitle} onChange={this.handleChange} />
                <Button className="btn" text="Edit" onClick={this.editTodo} />
                <Button className="btn btn--cancel" text="Cancel" onClick={this.props.onClick} />
            </div>
        )
    }

    editTodo = () => {
        const { key, id, done } = this.props.item
        fire.ref(`list/${key}`).set({title: this.state.todoNewTitle, id: id, done: done})
        this.props.onClick()
    }

    handleChange = (e) => {
        this.setState({
            todoNewTitle: e.target.value
        })
    }
}
