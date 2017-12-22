import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login';

// eslint-disable-next-line
import css from './app.scss';

const Component = () => (
  <div className="container">
    <img className="body-img" src="/images/mj.jpg" alt="" />
    <Login />
  </div>
);

ReactDOM.render(<Component />, document.getElementById('root'));
