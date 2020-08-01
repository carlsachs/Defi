import React from "react";

import { StyleSheet, SafeAreaView, View, Text } from "react-native";

const Beginner = () => {

    return (
        <SafeAreaView>
            <Text>Beginner Page is displaying...</Text>
        </SafeAreaView>
    )
}

export default Beginner;

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
      fontWeight: 'italic'
    }
  })