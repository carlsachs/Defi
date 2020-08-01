import React from "react";

import { StyleSheet, SafeAreaView, View, Text } from "react-native";

const Intermediate = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Intermediate Page is displaying...</Text>
        </SafeAreaView>
    )
}

export default Intermediate;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#A4B2D4'
    },
    text: {
      color: '#4B6297',
      fontSize: 24,
      fontWeight: 'bold'
    }
  })