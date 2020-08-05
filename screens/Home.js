import React, { useState, useEffect } from "react";

import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Button, Container, Header, Content, Body, Text, Title, Left, Right, Icon } from  "native-base";
import axios from "axios";

import CardFlip from 'react-native-card-flip';

const Home = (props) => {

    const { navigation } = props;

    const [chainlink, setChainlink] = useState([]);

    useEffect(() => {
        axios.get(`https://api.0xtracker.com/tokens/0x514910771af9ca656af840dff83e8264ecf986ca`)
        .then(res => {
            console.log("------------------------||||||||||||||" , res.data)
            setChainlink(res.data)
        })
        .catch(err => {
            console.log(err, "there was an error")
        })
    }, [])

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent style={{marginLeft: 20}}>
                        <Icon name='menu' onPress={() => navigation.toggleDrawer()}/>
                    </Button>
                </Left>
                <Body>
                    <Title>Home</Title>
                </Body>
                <Right>

                </Right>
            </Header>

            <View>
                <Text style={styles.title}>DeFi of the Day</Text>
            </View>

            <View>

                <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
                    <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} >
                        <View>
                            <Text style={styles.cardTitle}>ChainLink</Text>
                            <Text style={styles.cardSymbol}>$LINK</Text>
                            <Text style={styles.cardPrice}></Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} >
                        <View>
                            <Text style={styles.cardTitle}>{chainlink.name}</Text>
                        </View>
                    </TouchableOpacity>
                </CardFlip>

            </View>

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
    title: {
        fontSize: 40,
        color: "#003a8c",
        fontFamily: "Quicksand",
        textAlign: "center",
        marginTop: 25,
        marginBottom: 25
    },
    card: {
        backgroundColor: "white",
        borderColor: "black",
        height: 150,
        width: 150,
        alignSelf: "center"
    },
    cardTitle: {
        color: "#003a8c",
        textAlign: "center"
    },
    cardSymbol: {
        color: "#003a8c",
        textAlign: "center"
    },
    cardPrice: {
        color: "#003a8c",
        textAlign: "center"
    }
  })