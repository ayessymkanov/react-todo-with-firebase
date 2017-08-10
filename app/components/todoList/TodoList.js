import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../todoItem/TodoItem'
import './TodoList.styles.sass'

export default class TodoList extends Component {
    render() {
        const items = this.props.list.map(item => <li key={item.id}><TodoItem item={item} /></li>)

        return (
            <ul className="todo-list">
                {items}
            </ul>
        )
    }
}

TodoList.PropTypes = {
    list: PropTypes.array.isRequired
}
