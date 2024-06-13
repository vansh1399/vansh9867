import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Drawer1 from './app/container/Drawer/Drawer';

export default function App() {

  return (
    <NavigationContainer>
      <Drawer1 />
    </NavigationContainer>
  );
}
