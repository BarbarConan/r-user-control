import React from 'react';

import CreateForm from '../Helpers/CreateFormElements';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      formIsValid: false,
    };

    this.inputChange = this.inputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    console.log(evt);

    if (!this.state.formIsValid) evt.preventDefault();
  }

  inputChange(evt) {
    const val = evt.target.value;
    console.log(evt);

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
        <form data-validate onSubmit={this.handleSubmit}>
          <CreateForm
            name="username"
            id="userName"
            label="User Name"
            placeholder="Type your user name"
            onclick={this.inputChange}
            onchange={this.inputChange}
          />
          <CreateForm
            name="password"
            id="password"
            label="Password"
            placeholder="Type your password"
            type="password"
            onclick={this.inputChange}
            onchange={this.inputChange}
          />
          <button className="button" disabled={!this.state.formIsValid}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
