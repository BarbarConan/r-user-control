import React from 'react';

const Login = () => (
  <div>
    <h1>Please Login</h1>
    <label htmlFor="userName">User name</label>
    <input
      type="text"
      placeholder="Type your user name"
      id="userName"
      onFocus={e => e.target.select()}
    />
    <input type="password" placeholder="Password" id="password" onFocus={e => e.target.select()} />
    <button>Submit</button>
  </div>
);

export default Login;
