import React from 'react';
import TodoList from './todo_list';
import Header from './header';
import Footer from './footer';

let Wrapper = React.createClass({



  render() {
    return (
      <div className='todo-collection'>
        <Header/>
        <TodoList/>
        <Footer/>
      </div>
    );
  }

});

export default Wrapper;