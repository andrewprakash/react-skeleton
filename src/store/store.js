import { combineReducers, createStore, applyMiddleware } from 'redux'
import counterReducer from "../reducers/counterReducer.js"
import tweetsReducer from "../reducers/tweetsReducer.js"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"

const reducers = combineReducers({
    counter: counterReducer,
    tweets: tweetsReducer
})

const middleware = applyMiddleware(thunk, createLogger())

const store = createStore(reducers, middleware)

module.exports = store

