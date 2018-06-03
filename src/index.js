import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { globalReducer } from 'reducers/global/globalReducer'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(globalReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));
