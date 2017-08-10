import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { todoReducer } from './reducers/todoReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const store = createStore(todoReducer, applyMiddleware(thunk, logger))

window.store = store
