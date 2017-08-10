import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../../action/creators'
import TodoList from '../todoList/TodoList'
import AddTodo from '../addTodo/AddTodo'
import { fb } from '../../action/creators'
import './Home.styles.sass'

class Home extends Component {

    componentWillMount() {
        this.props.fetchTodos()
    }

    render() {
        const { loading, todoList } = this.props

        return (
            <div className="home">
                <h3>Firebase TODO List</h3>
                <AddTodo submit={this.handleSubmit} />
                {loading ? <span>Loading your TODO list</span> : <TodoList list={todoList} />}
                {!todoList.length && !loading ? <span>Nothing to display, add a new TODO</span> : null}
            </div>
        )
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fb.push({
            title: this.props.newTodoTitle,
            done: false,
            id: Math.floor(Math.random() * 200)
        })
    }
}

export default connect((state) => {
    return {
        todoList: state.todoList,
        newTodoTitle: state.newTodoTitle,
        loading: state.loading
    }
}, { fetchTodos })(Home)
