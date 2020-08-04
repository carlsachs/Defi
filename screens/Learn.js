import React from "react";
import { StyleSheet, TouchableOpacity, SafeAreaView, View, Text } from "react-native";
import { Button } from "native-base";

const Learn = (props) => {

    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Learn About DeFi</Text>
            </View>
            <View>
                <Text style={style.titleBottom}>What is your exposure to Decentralized Finance?</Text>
                <Button bordered rounded primary><Text>Beginner</Text></Button>
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
        backgroundColor: '#e6f7ff',
    },
    title: {
        fontSize: 40,
        color: "#003a8c",
        fontFamily: "Quicksand",
        textAlign: "center"
    },
    titleBottom: {
        fontSize: 40,
        color: "#003a8c",
        fontFamily: "Quicksand",
        textAlign: "center"
    }
})