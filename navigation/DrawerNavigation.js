import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';

//import Screens
import Home from "../screens/Home";
import LearnHome from "../screens/LearnHome";
import Beginner from "../screens/Beginner";
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Learn" component={LearnHome} />
        <Drawer.Screen name="Beginner" component={Beginner} />
    </Drawer.Navigator>
  );
}