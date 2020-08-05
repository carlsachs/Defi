import React, { useState, useEffect } from "react";

import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import { Button, Container, Header, Content, Body, Text, Title, Left, Right, Icon } from  "native-base";
import axios from "axios";

//import other components
import Article from "../components/Article";

const News = (props) => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get(`https://api.0xtracker.com/articles`)
        .then(res => {
            console.log("-----------------------------------------------------", res.data)
            setArticles(res.data.articles)
        })
        .catch(err => {
            console.log(err, "there was an error")
        })
    }, [])

    const { navigation } = props;

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent style={{marginLeft: 20}}>
                        <Icon name='menu' onPress={() => navigation.toggleDrawer()}/>
                    </Button>
                </Left>
                <Body>
                    <Title>News</Title>
                </Body>
                <Right>

                </Right>
            </Header>
            <View>
                <Text style={styles.title}>Recent News</Text>
            </View>

            <View style={styles.list}>
                <FlatList
                data={articles}
                keyExtractor={(articles) => articles.id.toString()}
                renderItem={({ item }) => (
                    <Article articles={item} />
                )
                } />
            </View>

        </Container>
    )
}

export default News;

const styles = StyleSheet.create({
    list: {
        padding: 0,
        margin: 0
    },
    title: {
        fontSize: 40,
        color: "#003a8c",
        fontFamily: "Quicksand",
        textAlign: "center",
        marginTop: 25,
        marginBottom: 25
    },
})