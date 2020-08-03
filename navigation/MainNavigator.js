import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import LearnHome from "../screens/LearnHome";
import Beginner from "../screens/Beginner";
import Intermediate from "../screens/Intermediate";
import Advanced from "../screens/Advanced";
import Login from "../screens/Login";

const Stack = createStackNavigator()

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Login' component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name='Home' component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="LearnHome" component={LearnHome} options={{ title: "Learn"}} />
        <Stack.Screen name="Beginner" component={Beginner} options={{ title: "Beginner"}} />
        <Stack.Screen name="Intermediate" component={Intermediate} options={{ title: "Intermediate"}} />
        <Stack.Screen name="Advanced" component={Advanced} options={{ title: "Advanced"}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator