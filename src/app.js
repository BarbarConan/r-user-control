import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login';

// eslint-disable-next-line
import css from './app.scss';

const Component = () => (
  <div className="container">
    <Login />
  </div>
);

ReactDOM.render(<Component />, document.getElementById('root'));
