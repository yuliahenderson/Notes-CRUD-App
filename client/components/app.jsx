import React, {Component} from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import UserForm from './users/userForm.jsx';


class App extends Component {
 constructor(props) {
  super(props);
  this.state = { notess: [] };
  this.logIn = this.logIn.bind(this);
  this.signUp = this.signUp.bind(this);
  this.signOut = this.signOut.bind(this);
 }
 componentDidMount() {
  this.updateAuth();
  if(cookie.load('token')) {
  }
 }

signOut() {
    request.post('/api/signout')
           .then(() => this.updateAuth());
  }
updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
logIn(userDetails) {
    request.post('/api/login')
          .send(userDetails)
         .then(() => {
           this.updateAuth();
         });
  }
signUp(userDetails) {
    request.post('/api/signup')
          .send(userDetails)
          .then(() => {
            this.updateAuth();
          });
  }
  render() {
    let userDisplayElement;
    if(this.state.token) {
      userDisplayElement = (
      <div>
        <button onClick={this.signOut}>Log Out</button>
      </div>
    );
  } else {
    userDisplayElement = (
      <div>
        <UserForm handleSubmit={this.signUp} buttonText="SignUp" />
        <UserForm handleSubmit={this.logIn} buttonText="LogIn" />
      </div>
    );
  }
  return (
    <div>
     {userDisplayElement}
    </div>
  );
 }
}


export default App;
