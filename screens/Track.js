import React, { useEffect, useState } from "react";
import axios from "axios";

import { StyleSheet, View, Text, FlatList, ListItem } from "react-native";

import { Container, Header, Left, Right, Body, Title, Button, Icon, Content } from "native-base";

//import other components
import BasicCoin from "../components/BasicCoin";

const Track = (props) => {

    const { navigation } = props;

    const [isFetching, setIsFetching] = useState(false);
    const [isFetched, setIsFetched] = useState(false);

    const [tokens, setTokens] = useState([]);

    // const [tokens, setTokens] = useState([
    //     {
    //         id: "1",
    //         name: "ETH",
    //         price: "$2"
    //     },
    //     {
    //         id: "2",
    //         name: "ETH",
    //         price: "$2"
    //     },
    //     {
    //         id: "3",
    //         name: "ETH",
    //         price: "$2"
    //     },
    //     {
    //         id: "4",
    //         name: "ETH",
    //         price: "$2"
    //     },
    //     {
    //         id: "5",
    //         name: "ETH",
    //         price: "$2"
    //     },
        
    // ]);

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

            <View style={styles.list}>
                <FlatList
                data={tokens}
                keyExtractor={(tokens) => tokens.address.toString()}
                renderItem={({ item }) => (
                    <BasicCoin tokens={item} />
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
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})