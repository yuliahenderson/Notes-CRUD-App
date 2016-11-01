import React from 'react';

const propTypes = {
  notes: React.PropTypes.array,
};

class NoteList extends React.Component {
  render() {
    return (
      <div>
        <h4>
          My Notes
        </h4>
        <div>
        {this.props.notes.map((note) => note.body)}
        </div>
      </div>
    );
  }
}

NoteList.propTypes = propTypes;

export default NoteList;
