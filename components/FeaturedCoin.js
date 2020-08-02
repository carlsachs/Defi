import React from "react";

import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from "react-native";

const FeaturedCoin = ({ featured }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.name}>{featured.name}</Text>
            <Text style={styles.symbol}>{featured.symbol}</Text>
            <Text style={styles.price}>${Math.round(featured.price.last * 100) / 100}</Text>
            <Text style={styles.totalText}>Market Cap:</Text>
            <Text style={styles.mktcap}>${Math.round(featured.marketCap)}</Text>
            <Text style={styles.totalText}>Cir/Total Supply:</Text>
            <Text style={styles.supply}>{Math.round(featured.circulatingSupply)} / {Math.round(featured.totalSupply)}</Text>
        </SafeAreaView>
    )
}

export default FeaturedCoin;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0c4761",
        height: 300,
        width: 250,
        borderRadius: 10,
        display: "flex",
        justifyContent: "space-evenly",
    },
    text: {
        color: "white",
        textAlign: "center"
    },
    name: {
        color: "white",
        textAlign: "center",
        marginTop: 15,
        fontSize: 20
    },
    symbol: {
        color: "white",
        textAlign: "center",
        fontSize: 20
    },
    price: {
        color: "white",
        textAlign: "center",
        fontSize: 20
    },
    mktcap: {
        color: "white",
        textAlign: "center"
    },
    totalText: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    },
    supply: {
        color: "white",
        textAlign: "center",
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15
    }
})