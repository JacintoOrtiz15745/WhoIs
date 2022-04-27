import React from 'react';
import {View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  );
};

export default Navigations;
