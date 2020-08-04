import React from "react";

import { Container, Header, Left, Right, Body, Title, Button, Icon } from "native-base";

const Track = (props) => {

    const { navigation } = props;

    return (
        <Container>
            <Header>
                <Left>
                    
                </Left>
                <Body>
                    <Title>Track DeFi</Title>
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

export default Track;