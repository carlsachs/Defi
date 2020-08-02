import React, { useState } from "react";

import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from "react-native";

const FeaturedCoin = ({ featured }) => {

    const change = `featured.price.change`;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.name}>{featured.name}</Text>
            <Text style={styles.symbol}>{featured.symbol}</Text>
            <Text style={{color: change > 0 ? 'green' : 'red', textAlign: "center", fontSize: 23, fontFamily: "Quicksand"}}>${Math.round(featured.price.last * 100) / 100}</Text>
            <Text style={styles.mktText}>Market Cap:</Text>
            <Text style={styles.mktcap}>${Math.round(featured.marketCap)}</Text>
            <Text style={styles.totalText}>Cir/Total Supply:</Text>
            <Text style={styles.supply}>{Math.round(featured.circulatingSupply)} / {Math.round(featured.totalSupply)}</Text>
        </SafeAreaView>
    )
}

export default FeaturedCoin;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#b2ebd8",
        height: 300,
        width: 250,
        borderRadius: 10,
        display: "flex",
        justifyContent: "space-evenly",
    },
    text: {
        color: "#249e86",
        textAlign: "center",
        fontFamily: "Quicksand"
    },
    name: {
        color: "#249e86",
        textAlign: "center",
        marginTop: 15,
        fontSize: 20,
        fontFamily: "Quicksand"
    },
    symbol: {
        color: "#249e86",
        textAlign: "center",
        fontSize: 30,
        fontFamily: "Quicksand"
    },
    mktcap: {
        color: "#249e86",
        textAlign: "center",
        fontFamily: "Quicksand",
        fontSize: 17
    },
    totalText: {
        color: "#249e86",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Quicksand"
    },
    mktText: {
        color: "#249e86",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Quicksand"
    },
    supply: {
        color: "#249e86",
        textAlign: "center",
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        fontFamily: "Quicksand"
    }
})