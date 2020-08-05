import React from "react";

import { createDrawerNavigator, DrawerContent, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Text } from "react-native"

//import Screens
import Home from "../screens/Home";
import Track from "../screens/Track";
import Learn from "../screens/Learn";
import News from "../screens/News";
import Login from "../screens/Login";
import CustomDrawerContent  from "./CustomDrawerContent";
import { NavigationContainer } from "@react-navigation/native";


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Track" component={Track}/>
            <Drawer.Screen name="Learn" component={Learn} />
            <Drawer.Screen name="News" component={News}/>
            <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
  );
}