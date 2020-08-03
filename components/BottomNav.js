import React from "react";

import { Container, Text, Button, Footer, FooterTab, Icon, Badge } from "native-base";

const BottomNav = (props) => {

    const { navigation } = props;

    return (
        <Container>
            <Footer>
            <FooterTab>
            <Button badge vertical>
                <Badge><Text>2</Text></Badge>
                <Icon name="apps" />
                <Text>Apps</Text>
            </Button>
            <Button vertical>
                <Icon name="camera" />
                <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
                <Badge ><Text>51</Text></Badge>
                <Icon active name="navigate" />
                <Text>Navigate</Text>
            </Button>
            <Button vertical>
                <Icon name="person" />
                <Text>Contact</Text>
            </Button>
            </FooterTab>
        </Footer>
        </Container>
    )
}
export default BottomNav;