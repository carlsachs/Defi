import React from "react";

import { View, Text } from "react-native";
import { Container, Header, Left, Right, Title, Button, Icon, Body } from "native-base";

const DefiOnly = (props) => {

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
                    <Title>Defi Markets</Title>
                </Body>
                <Right>

                </Right>
            </Header>
            <View>
                <Text>DefiMArkets pafge is showing</Text>
            </View>

        </Container>
    )
}

export default DefiOnly;