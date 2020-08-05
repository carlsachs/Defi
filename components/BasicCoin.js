import React from "react";

import { StyleSheet } from "react-native";
import { Container, Content, Header, Left, Right, Body, Title, Button, Icon } from "native-base";

const BasicCoin = ( { tokens } ) => {
    
    return (
        <Container style={styles.container}>
            <Content>
                <Title>{tokens.name}</Title>
                <Title>{tokens.price.last}</Title>
            </Content>
        </Container>
    )
}

export default BasicCoin;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        height: 100,
        width: 100
    }
})