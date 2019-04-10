import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger';

const browserHistory = createBrowserHistory();

// Configure store
function configureStore(initialState) {
    const localStore = JSON.parse(localStorage.getItem('dashboard_state')) ? JSON.parse(localStorage.getItem('dashboard_state')) : initialState;
    let middlewares = [
        routerMiddleware(browserHistory), 
        thunk,
        logger,
        reduxImmutableStateInvariant()
    ];

    return createStore(
        connectRouter(rootReducer),
        localStore,
        compose(
            applyMiddleware(
                ...middlewares
            ),
        )
    );
}

export { configureStore, browserHistory };