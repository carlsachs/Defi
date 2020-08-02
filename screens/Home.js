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
            console.log(res.data);
            setFeatured(res.data);
        })
        .catch(err => {
            console.log(err, "cmon carl")
        })
    }, [])

    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
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
      backgroundColor: '#ebf9ff',
    },
    text: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
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
  })