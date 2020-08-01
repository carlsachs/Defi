import React from "react";

import { StyleSheet, TouchableOpacity, SafeAreaView, View, Text, Button } from "react-native";

const Home = (props) => {

    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LearnHome')}>
                <Text style={styles.buttonText}>Learn</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#60B093'
    },
    text: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    button: {
        padding: "5%",
        borderColor: "#20232a"
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
  })