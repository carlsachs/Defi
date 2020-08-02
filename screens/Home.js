import React, { useState, useEffect } from "react";

import { StyleSheet, TouchableOpacity, SafeAreaView, View, Text, Button } from "react-native";
import axios from "axios";

//import other components
import FeaturedCoin from "../components/FeaturedCoin";

const Home = (props) => {

    const [featured, setFeatured] = useState();

    useEffect(() => {
        axios.get(`https://api.0xtracker.com/tokens/0xd46ba6d942050d489dbd938a2c909a5d5039a161`)
        .then(res => {
            setFeatured(res.data);
        })
        .catch(err => {
            console.log(err, "cmon carl")
        })
    }, [])

    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.featuredTitle}>Featured DeFi Coin</Text>
            <FeaturedCoin featured={featured} />
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('LearnHome')}>
                    <Text style={styles.buttonText}>Learn</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#e4f7f0',
    },
    featuredTitle: {
        fontSize: 24,
        color: "#0b5248",
        fontFamily: "Quicksand"
    },
    text: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    button: {
        padding: 40,
        backgroundColor: "#36c4a3",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Quicksand"
    },
  })