import { FETCH_TODOS, NEW_TODO, START_FETCHING } from './constants'

import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDEaIcTEZ2JSJlZLIvNRcBxqlDUIXZqe8E",
    authDomain: "todolist-8840d.firebaseapp.com",
    databaseURL: "https://todolist-8840d.firebaseio.com",
    projectId: "todolist-8840d",
    storageBucket: "todolist-8840d.appspot.com",
    messagingSenderId: "574543627980"
}

export const fb = firebase.initializeApp(config).database().ref().child('list')

export const fire = firebase.database()

export function fetchTodos() {
    return (dispatch) => {
        dispatch({
            type: START_FETCHING
        })
        fb.on('value', snap => {
            const data = [];

            snap.forEach(snapshot => {
                let item;
                item = snapshot.val()
                item.key = snapshot.getKey()
                data.push(item)
            })
            dispatch({
                type: FETCH_TODOS,
                payload: data
            })
        })
    }
}

export function newTodoTitle(title) {
    return {
        type: NEW_TODO,
        payload: title
    }
}
