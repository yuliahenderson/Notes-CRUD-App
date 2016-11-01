import React from 'react';

const propTypes = {
  sendNote: React.PropTypes.func,
};

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.sendNote(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="POST" />
        </form>
      </div>
    );
  }
}

NoteForm.propTypes = propTypes;

export default NoteForm;
