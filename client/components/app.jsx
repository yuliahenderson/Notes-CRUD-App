import React, {Component} from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import UserForm from './users/userForm.jsx';
import NoteList from './notes/notesList.jsx';
import NoteForm from './notes/noteForm.jsx';

const propTypes = {};

class App extends Component {
 constructor(props) {
  super(props);
  this.state = { notes: [] };
  this.logIn = this.logIn.bind(this);
  this.signUp = this.signUp.bind(this);
  this.signOut = this.signOut.bind(this);
  this.sendNote = this.sendNote.bind(this);
 }
 componentDidMount() {
  this.updateAuth();
  if(cookie.load('token')) {
    this.getCurrentUserNotes();
  }
 }
getCurrentUserNotes() {
  request.get('/api/notes')
         .then((response) => {
          const notes = response.body;
          this.setState({ notes });
         })
         .catch(() => {
          this.updateAuth();
         })
}

sendNote({ body }) {
  request.post('/api/notes')
         .send({ body })
         .then(() => {
          this.getCurrentUserNotes();
         })
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
           this.getCurrentUserNotes();
         });
  }
signUp(userDetails) {
    request.post('/api/signup')
           .send(userDetails)
           .then(() => {
            this.updateAuth();
            this.getCurrentUserNotes();
          });
  }
  render() {
    let userDisplayElement;
    if(this.state.token) {
      userDisplayElement = (
      <div>
        <button onClick={this.signOut}>Log Out</button>
          <NoteForm sendNote={this.sendNote} />
          <NoteList notes={this.state.notes} />
      </div>
    );
  } else {
    userDisplayElement = (
      <div>
        <img className='logo' src='../../dist/stylesheets/logo.png' />
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

App.propTypes = propTypes;
export default App;
