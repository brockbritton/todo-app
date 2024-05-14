import React from 'react';
import TodoProvider from './Context/Settings';
import { MantineProvider } from '@mantine/core';

import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <TodoProvider>
          <Todo />
        </TodoProvider>
      </MantineProvider> 
    );
  }
}
