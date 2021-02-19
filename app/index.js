import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRouter from "./navigation/root-switch";
import * as Utils from "@utils";
import { StatusBar } from "react-native";
console.disableYellowBox = true;


export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    StatusBar.setBarStyle('light-content')
    StatusBar.setBackgroundColor('rgb(0,0,19)')
    
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <NavigationContainer ref={navigationRef => Utils.setTopLevelNavigator(navigationRef)}>
        <SafeAreaProvider>
          <AppRouter />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}


