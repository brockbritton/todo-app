import React from 'react';
import { Tabs } from '@mantine/core';
import '@mantine/core/styles.css'
import Auth from './Components/Auth';
import Todo from './Components/Todo';
import SettingsPage from './Components/Settings';
import Login from './Components/Login';

export default class App extends React.Component {

  render() {
    return (
      <Tabs variant="outline" defaultValue="settings" style={{ marginTop: '1vh' }}> {/* CHANGE DEFAULT TAB HERE */}
        <Tabs.List>
          <Tabs.Tab value="home">
            Home
          </Tabs.Tab>
          <Tabs.Tab value="settings">
            Settings
          </Tabs.Tab>
          <Login />
        </Tabs.List>
        <Tabs.Panel value="home">
          <Todo />
        </Tabs.Panel>
        <Tabs.Panel value="settings">
          <SettingsPage />
        </Tabs.Panel>
      </Tabs>
    );
  }
}
