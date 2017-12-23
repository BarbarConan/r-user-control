import React from 'react';

import CreateForm from '../Helpers/FormValidation';

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
      <React.Fragment>
        <h1>
          Please login <code>{this.state.formIsValid.toString()}</code>
        </h1>
        <form data-validate>
          <CreateForm type="tel" />

          <label htmlFor="userName">User name</label>
          <input
            type="text"
            placeholder="Type your user name"
            id="userName"
            onFocus={e => e.target.select()}
            onChange={this.inputChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onFocus={e => e.target.select()}
            onChange={this.inputChange}
            required
          />
          <button className="button" onClick={this.submitHandle} disabled={!this.state.formIsValid}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
