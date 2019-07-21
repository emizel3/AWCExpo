import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Notifs from './components/Notifs';
import Location from './components/Location';
import Camera2 from './components/Camera2';
import {createStackNavigator, createAppContainer} from 'react-navigation';
const RootStack = createStackNavigator(
{
    Home: {screen: Home},
    Location: {screen: Location},
    Camera2: {screen: Camera2},
    Notifs: {screen: Notifs},
});
const App = createAppContainer(RootStack);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
