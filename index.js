import React from 'react';
import { render } from 'react-dom';
import store from './store/store'
import { Provider } from 'react-redux'


import App from './App'

import './style.css';

const AppProvided = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

render(<AppProvided />, document.getElementById('root'))