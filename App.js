/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Navigator from './src/navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  }
}
export default App;
