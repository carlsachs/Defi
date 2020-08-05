import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, Drawer } from "native-base";

import Learn from "../screens/Learn";
import Beginner from "../screens/Beginner";
import Intermediate from "../screens/Intermediate";
import Advanced from "../screens/Advanced";
import Login from "../screens/Login";
import DrawerNavigation from "../navigation/DrawerNavigation";

const Stack = createStackNavigator()

export default function MainNavigator() {


  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="false">
          <Stack.Screen name='Login' component={Login} options={{ title: 'Login' }} />
          <Stack.Screen name='Learn' component={Learn} options={{ title: 'Learn' }} />
          <Stack.Screen name='Home' component={DrawerNavigation} options={{ title: 'Home'}} />
          <Stack.Screen name="Beginner" component={Beginner} options={{ title: "Beginner"}} />
          <Stack.Screen name="Intermediate" component={Intermediate} options={{ title: "Intermediate"}} />
          <Stack.Screen name="Advanced" component={Advanced} options={{ title: "Advanced"}} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}