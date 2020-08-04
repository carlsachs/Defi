import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Button } from "native-base";

const Learn = (props) => {

    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Learn About DeFi</Text>
            </View>
            <View>
                <Text style={styles.titleBottom}>What is your exposure to Decentralized Finance?</Text>
            </View>
            <View style={styles.buttons}>
                <Button bordered block primary large style={styles.button1} onPress={() => navigation.navigate('Beginner')}><Text>Beginner</Text></Button>
                <Button bordered block primary large style={styles.button2} onPress={() => navigation.navigate('Intermediate')}><Text>Intermediate</Text></Button>
                <Button bordered block primary large style={styles.button3} onPress={() => navigation.navigate('Advanced')}><Text>Advanced</Text></Button>
            </View>
        </SafeAreaView>
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
        textAlign: "center"
    },
    titleBottom: {
        fontSize: 28,
        color: "#003a8c",
        fontFamily: "Quicksand",
        textAlign: "center",
    },
    buttons: {
        height: 300,
        justifyContent: "space-evenly"
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