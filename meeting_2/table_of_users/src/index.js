import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Table from './components/table';

const store = configureStore(); // You can also pass in an initialState here


ReactDOM.render(
<Provider store={store}>
        <Table />
    </Provider>,
    document.getElementById('root')
  )
