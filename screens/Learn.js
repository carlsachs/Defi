import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Header, Left, Body, Title, Right, Text, Content, Container, Icon } from "native-base";

const Learn = (props) => {

    const { navigation } = props;

    return (
        <Container>
            <Header>
                <Left>
                </Left>
                <Body>
                    <Title>Learn</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' onPress={() => navigation.toggleDrawer()}/>
                    </Button>
                </Right>
            </Header>
            <View>
                <Text style={styles.title}>Learn about DeFi</Text>
            </View>
            <View>
                <Text style={styles.titleBottom}>What is your exposure to decentralized finance?</Text>
            </View>
            <View style={styles.buttons}>
                <Button bordered block primary large style={styles.button1} onPress={() => navigation.navigate('Beginner')}><Title style={{color: "#1ba15f"}}>Beginner</Title></Button>
                <Button bordered block primary large style={styles.button2} onPress={() => navigation.navigate('Intermediate')}><Title style={{color: "#561799"}}>Intermediate</Title></Button>
                <Button bordered block primary large style={styles.button3} onPress={() => navigation.navigate('Advanced')}><Title style={{color: "#911717"}}>Advanced</Title></Button>
            </View>
        </Container>
    )
}

export default Learn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 40,
        color: "#003a8c",
        fontFamily: "Quicksand",
        textAlign: "center",
        marginTop: 25
    },
    titleBottom: {
        fontSize: 25,
        color: "#003a8c",
        fontFamily: "Quicksand",
        textAlign: "center",
        marginTop: 50,
        marginBottom: 20
    },
    buttons: {
        height: 400,
        justifyContent: "space-evenly",
        alignSelf: "center"
    },
    button1: {
        width: 200,
        textAlign: "center",
        borderColor: "#36d14b"
    },
    button2: {
        width: 200,
        textAlign: "center",
        borderColor: "#603bd1"
    },
    button3: {
        width: 200,
        textAlign: "center",
        borderColor: "#c9222b"
    },
})