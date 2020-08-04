import React, { useState, useEffect } from "react";

import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Button, Container, Header, Content, Body, Text, Title, Left, Right, Icon } from  "native-base";
import axios from "axios";

const Home = (props) => {

    // useEffect(() => {
    //     axios.get(`https://api.0xtracker.com/articles`)
    //     .then(res => {
    //         console.log(res.data)
    //         setArticles(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err, "there was an error")
    //     })
    // }, [])

    const { navigation } = props;

    return (
        <Container>
            <Header>
                <Left>
                </Left>
                <Body>
                    <Title>Home</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' onPress={() => navigation.toggleDrawer()}/>
                    </Button>
                </Right>
            </Header>

        </Container>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    featuredTitle: {
        fontSize: 24,
        color: "#003a8c",
        fontFamily: "Quicksand"
    },
    text: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    button: {
        padding: 40,
        backgroundColor: "#36c4a3",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Quicksand"
    },
  })