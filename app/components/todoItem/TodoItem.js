import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fire } from '../../action/creators'
import './TodoItem.styles.sass'
import Button from '../button/button'
import Modal from '../modal/Modal'

export default class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    render() {
        const { title } = this.props.item

        return (
            <div className="todo-item">
                <span>{title}</span>
                <div className="actions">
                    <Button text="Edit" onClick={this.toggleModal} />
                    <Button text="Remove" onClick={this.removeTodo} />
                </div>
                {this.editTodo()}
            </div>
        )
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    editTodo = () => {
        return this.state.showModal ? <Modal item={this.props.item} onClick={this.toggleModal} /> : null
    }

    removeTodo = () => {
        fire.ref(`list/${this.props.item.key}`).remove()
    }
}

TodoItem.PropTypes = {
    item: PropTypes.obj
}
