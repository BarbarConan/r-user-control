import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      formIsValid: false,
    };
    this.submitHandle = evt => console.log(evt);
  }

  render() {
    const title = `Please login ${this.state.formIsValid}`;
    return (
      <div>
        <h1>{title}</h1>
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          placeholder="Type your user name"
          id="userName"
          onFocus={e => e.target.select()}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onFocus={e => e.target.select()}
        />
        <button onClick={this.submitHandle} disabled={!this.state.formIsValid}>
          Submit
        </button>
      </div>
    );
  }
}

export default Login;
