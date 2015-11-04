import React from 'react';
import TodoList from './todo_list';

let TodoItem = React.createClass({

  getTodo(task) {
    return <TodoList key={task.id} task={task}/>;
  },

  render() {
    return (
      <item>
        {this.props.data.map(this.getTodo)}
      </item>
    );
  }

});

export default TodoItem;