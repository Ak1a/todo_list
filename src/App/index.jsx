import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Users from '../pages/users';

const App = () => (
  <Provider store={store}>
    <div className="container">
      <Users/>
    </div>
  </Provider>
);

export default App;