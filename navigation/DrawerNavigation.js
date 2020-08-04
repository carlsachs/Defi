import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';

//import Screens
import Home from "../screens/Home";
import Beginner from "../screens/Beginner";
import Learn from "../screens/Learn";
import Login from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
      <NavigationContainer>
        <Drawer.Navigator drawerStyle={{
          backgroundColor: "#bae7ff"
        }}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Learn" component={Learn} />
            <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}