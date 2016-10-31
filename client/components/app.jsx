import React, {Component} from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import UserForm from './users/userForm.jsx';


class App extends Component {
  render() {
    <div>
      <UserForm handleSubmit={this.signUp} buttonText="SignUp" />
      <UserForm handleSubmit={this.logIn} buttonText="LogIn" />
    </div>
  }
}
App.propTypes = propTypes;
export default App;
