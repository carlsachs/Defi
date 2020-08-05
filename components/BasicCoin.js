import React from "react";

import { StyleSheet, View } from "react-native";
import { Container, Content, Header, Left, Right, Body, Title, Button, Icon } from "native-base";

const BasicCoin = ( { tokens } ) => {

    const change = tokens.price.change;
    
    return (
        <Container style={styles.container}>
            <View>
                <Title>{tokens.symbol}</Title>
                <Title>${Math.round(tokens.price.last * 100) / 100}</Title>
            </View>
        </Container>
    )
}

export default BasicCoin;

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        backgroundColor: "lightblue"
    }
})