import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/navigation/Navigations';

const App = () => {
  return (
    <NavigationContainer>
      <Navigations/>
    </NavigationContainer>
  );
};

export default App;
