import React from 'react';

let ListItem = React.createClass({

  render() {
    return (
      <li className='todo'>
        <span className='title'>
          {this.props.field}
        </span>
        <button>
          <i className='fa'></i>
        </button>
      </li>
    );
  }

});

export default ListItem;