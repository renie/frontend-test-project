import { createStore, compose, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reduxCatch from 'redux-catch'
import { createBrowserHistory } from 'history'

import rootReducer from '../reducers'

const browserHistory = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function errorHandler(error, getState, lastAction, dispatch) {
  console.error(error)
  console.debug('current state', getState())
  console.debug('last action was', lastAction)
}


function configureStore(initialState) {
    const localStore = JSON.parse(localStorage.getItem('dashboard_state')) ? JSON.parse(localStorage.getItem('dashboard_state')) : initialState

    let middlewares = [
        reduxCatch(errorHandler),
        routerMiddleware(browserHistory),
        thunk,
        logger,
        reduxImmutableStateInvariant()
    ]

    return createStore(
        rootReducer,
        localStore,
        composeEnhancers(
            applyMiddleware(
                ...middlewares
            ),
        )
    )
}

export { configureStore, browserHistory }
