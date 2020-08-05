import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from "react-native-paper";
import { Header } from "native-base";
import header from "./header.jpg";
import Swiper from 'react-native-swiper';

export default function CustomDrawerContent(props)  {
            return (
                <DrawerContentScrollView {...props}>
                <Header style={styles.header}>
                    <Image source={header} alt="header photo of hills" style={{
                        height: 120,
                        width: 400
                    }}/>
                </Header>
                    <Title style={styles.hello}>Hello Carl!</Title>
                    <DrawerItemList {...props} />
                    <DrawerItem label="Settings" onPress={() => alert('Link to help')} />
                </DrawerContentScrollView>
        );
    }

const styles = StyleSheet.create({
    header: {
        height: 120,
        backgroundColor: "white"
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      },
      hello: {
          color: "#0050b3",
          textAlign: "center",
          marginTop: 10,
          marginBottom: 10
      }
})