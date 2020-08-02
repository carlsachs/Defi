import React from "react";

import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from "react-native";

const LearnHome = (props) => {

    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Are you...</Text>
            <View style={{
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "space-evenly",
                height: 400
            }}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Beginner')}>
                    <Text style={styles.buttonTextLarge}>Beginner</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Intermediate')}>
                    <Text style={styles.buttonTextLarge}>Intermediate</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Advanced')}>
                    <Text style={styles.buttonTextLarge}>Advanced</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LearnHome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ebf9ff',
    },
    titleText: {
      color: '#0c4761',
      fontSize: 24,
      fontWeight: 'bold',
      flex: 1,
      marginTop: 100
    },
    button: {
        padding: 40,
        backgroundColor: "#0c4761",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonTextLarge: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
  })