import {createStore,combineReducers,applyMiddleware} from 'redux'

//npm install --save redux-thunk
import thunk from 'redux-thunk'

import postsReducer from '../reducers/postsReducer'
import authorsReducer from '../reducers/authorsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        posts: postsReducer,
        authors: authorsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore