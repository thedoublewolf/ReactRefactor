import React from 'react';

let Form =  React.createClass({

  addTodo() {

  },

  render() {
    return (
      <form className='todo-add'>
        <input type='text' name='task' placeholder='Add Something'/>
        <button onSubmit={this.addTodo}>
          <i className='fa fa-plus'></i>
        </button>
      </form>
    );
  }

});

export default Form;