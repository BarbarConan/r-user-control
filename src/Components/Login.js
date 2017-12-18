import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      formIsValid: false,
    };
    this.submitHandle = evt => console.log(evt);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(evt) {
    const val = evt.target.value;

    this.setState({
      formIsValid: val.length > 0,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Please login <code>{this.state.formIsValid.toString()}</code>
        </h1>
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          placeholder="Type your user name"
          id="userName"
          onFocus={e => e.target.select()}
          onChange={this.inputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onFocus={e => e.target.select()}
          onChange={this.inputChange}
        />
        <button onClick={this.submitHandle} disabled={!this.state.formIsValid}>
          Submit
        </button>
      </div>
    );
  }
}

export default Login;
