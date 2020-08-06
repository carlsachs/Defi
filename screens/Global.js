import React from "react";

import { Text, View } from "react-native";
import { Container, Header, Left, Right, Title, Content, Icon, Body, Button } from "native-base"

const Global = (props) => {

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent style={{marginLeft: 20}}>
                        <Icon name='menu' onPress={() => navigation.toggleDrawer()}/>
                    </Button>
                </Left>
                <Body>
                    <Title>General Crypto</Title>
                </Body>
                <Right>

                </Right>
            </Header>
            <Content>
                <Text>Global Crypto Markets Page Displaying</Text>
            </Content>
        </Container>
    )
}

export default Global;