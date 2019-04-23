import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import * as serviceWorker from './serviceWorker'
import { configureStore } from './store/configureStore'
import initialState from './reducers/initialState'
import './index.css'

export const store = configureStore(initialState);


ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('app')
)

serviceWorker.unregister()
