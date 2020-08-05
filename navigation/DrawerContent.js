import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from "react-native-paper";

export default function DrawerContent(props)  {

    return (
        <DrawerContentScrollView>
            <View>
                <Text>Hello</Text>
            </View>
        </DrawerContentScrollView>
    )
}