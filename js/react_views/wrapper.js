import React from 'react';
import TodoList from './todo_list';
import Form from './form';
import Header from './header';
import Footer from './footer';

let Wrapper = React.createClass({

  render() {
    return (
      <div className='todo-collection'>
        <Header/>
        <main>
          <Form/>
          <TodoList/>
        </main>
          <Footer/>
      </div>
    );
  }

});

export default Wrapper;