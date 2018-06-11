import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomeScreen from './layouts/HomeScreen';
import Screen1 from './layouts/Screen1';
import {
  DrawerNavigator
} from 'react-navigation';


const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
    }
  },
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      drawerLabel: 'After home'
    }
  },
});
export default RootDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
