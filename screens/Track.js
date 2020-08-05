import React, { useEffect, useState } from "react";
import axios from "axios";

import Swiper from "react-native-swiper";

import header from "../navigation/header.jpg";

import { StyleSheet, View, Text, FlatList, ListItem, TouchableOpacity, Image } from "react-native";

import { Container, Header, Left, Right, Body, Title, Button, Icon, Content } from "native-base";

//import other components
import BasicCoin from "../components/BasicCoin";

const Track = (props) => {

    const { navigation } = props;

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent style={{marginLeft: 20}}>
                        <Icon name='menu' onPress={() => navigation.toggleDrawer()}/>
                    </Button>
                </Left>
                <Body>
                    <Title>Track DeFi</Title>
                </Body>
                <Right>

                </Right>
            </Header>
            <View>
                <Text style={styles.market}>Markets</Text>
            </View>
            <View style={styles.swipe}>
            <Swiper style={styles.wrapper} 
                showsButtons={true}
                autoplay={true}
                showsPagination={false}
                showsButtons={false}
                >
                <View style={styles.slide1}>
                <Image source={header} alt="header" />
                <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
                </View>
                    <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        </View>
      </Container>
    )
}

export default Track;

const styles = StyleSheet.create({
    list: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: 100
    },
    swipe: {
        marginTop: "5%",
        height: 200,
        width: 360,
        alignSelf: "center"
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
      market: {
          color: "#003a8c",
          fontSize: 30,
          fontFamily: "Quicksand",
          textAlign: "center",
          marginTop: 10
      }
})

// <View style={styles.list}>
// <FlatList
// numColumns={2}
// data={chainlink}
// keyExtractor={(chainlink) => chainlink.id.toString()}
// renderItem={({ item }) => (
//     <BasicCoin chainlink={item} onPress={() => navigation.navigate()}/>
// )
// } />
// </View>

// <View style={styles.swipe}>
// <Swiper style={styles.wrapper} showsButtons={true}>
//     <View style={styles.slide1}>
//     <Text style={styles.text}>Hello Swiper</Text>
//     </View>
//     <View style={styles.slide2}>
//     <Text style={styles.text}>Beautiful</Text>
//     </View>
//         <View style={styles.slide3}>
//         <Text style={styles.text}>And simple</Text>
//     </View>
// </Swiper>
// </View>