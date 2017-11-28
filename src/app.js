import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login';

require('./app.scss');

const Component = () => (
  <div>
    <h1>Hello, world!</h1>
    <Login />
  </div>
);

ReactDOM.render(<Component />, document.getElementById('root'));
