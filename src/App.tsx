import React from 'react';
import TodoProvider from './Context/Settings';

import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <TodoProvider>
        <Todo />
      </TodoProvider>
      
    );
  }
}
