import React from 'react';

let Form =  React.createClass({

  render() {
    return (
      <form className='todo-add'>
        <input type='text' name='task' placeholder='Add Something'/>
        <button><i className='fa fa-plus'></i></button>
      </form>
    );
  }

});

export default Form;