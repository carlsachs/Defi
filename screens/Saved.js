import React from "react";

import { View, Text } from "react-native";
import { Container, Header, Left, Right, Content, Title, Icon, Body, Button } from "native-base";

const Saved = (props) => {

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
                    <Title>Saved</Title>
                </Body>
                <Right>

                </Right>
            </Header>
            <View>
                <Text>User Saved Page is displaying</Text>
            </View>
        </Container>
    )
}

export default Saved;