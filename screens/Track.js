import React, { useEffect } from "react";
import axios from "axios";

import { Container, Header, Left, Right, Body, Title, Button, Icon } from "native-base";

const Track = (props) => {

    const { navigation } = props;

    useEffect(() => {
        axios.get(`https://api.0xtracker.com/tokens`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err, "there was an error")
        })
    }, [])

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