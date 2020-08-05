import React from "react";

import { StyleSheet, View } from "react-native";
import { Container, Content, Header, Left, Right, Body, Title, Button, Icon } from "native-base";

const BasicCoin = ( { tokens } ) => {

    const change = tokens.price.change;
    
    return (
        <Container style={styles.container}>
            <View>
                <Title>{tokens.symbol}</Title>
                <View style={styles.view}>
                <Title>${Math.round(tokens.price.last * 100) / 100}</Title>
                <Title>{Math.round(change * 10) / 1000}%</Title>
                </View>
            </View>
        </Container>
    )
}

export default BasicCoin;

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        backgroundColor: "#f0f0f0",
        justifyContent: "center"
    },
})