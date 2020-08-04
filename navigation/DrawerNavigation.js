import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from "react-native"

//import Screens
import Home from "../screens/Home";
import Track from "../screens/Track";
import Learn from "../screens/Learn";
import Login from "../screens/Login";


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    
        <Drawer.Navigator drawerStyle={{
          backgroundColor: "#fafafa"
        }}
        >
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Track" component={Track}/>
            <Drawer.Screen name="Learn" component={Learn} />
            <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
  );
}