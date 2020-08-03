import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import MainNavigator from "./navigation/MainNavigator";
import Drawer from "./navigation/DrawerNavigation";

export default function App() {

  let [fontsLoaded] = useFonts({
    'Quicksand': require('./assets/fonts/Quicksand.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
    } else {
    return (
      <DrawerNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
