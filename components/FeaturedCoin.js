import React from "react";

import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const FeaturedCoin = ({ featured }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text>{featured.symbol}</Text>
            <Text>{featured.name}</Text>
        </SafeAreaView>
    )
}

export default FeaturedCoin;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    }
})