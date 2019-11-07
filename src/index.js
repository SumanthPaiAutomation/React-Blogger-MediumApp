import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import {startSetPosts} from './actions/posts'
import {startSetAuthors} from './actions/authors'


import configureStore from './store/configureStore'
const store = configureStore()

store.dispatch(startSetPosts())
store.dispatch(startSetAuthors())

const ele = <Provider store={store}><App/></Provider>


ReactDOM.render(ele,document.getElementById('root'))

