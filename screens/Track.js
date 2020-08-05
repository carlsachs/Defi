import React, { useEffect, useState } from "react";
import axios from "axios";

import { StyleSheet, View, Text, FlatList, ListItem } from "react-native";

import { Container, Header, Left, Right, Body, Title, Button, Icon, Content } from "native-base";

//import other components
import BasicCoin from "../components/BasicCoin";

const Track = (props) => {

    const { navigation } = props;

    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        axios.get(`https://api.0xtracker.com/tokens/`)
        .then(res => {
            console.log("------------------------||||||||||||||" , res.data.tokens)
            setTokens(res.data.tokens)
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
                    <Title>Track DeFi</Title>
                </Body>
                <Right>

                </Right>
            </Header>
            <View>
                <Text style={styles.title}>Popular DeFi Coins</Text>
            </View>
            <View style={styles.list}>
                <FlatList
                numColumns={2}
                data={tokens}
                keyExtractor={(tokens) => tokens.address.toString()}
                renderItem={({ item }) => (
                    <BasicCoin tokens={item} onPress={() => navigation.navigate()}/>
                )
                } />
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
    title: {
        fontSize: 40,
        color: "#003a8c",
        fontFamily: "Quicksand",
        textAlign: "center",
        marginTop: 25,
        marginBottom: 25
    },
})