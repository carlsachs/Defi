import React, { useState, useEffect } from "react";

import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
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
                {articles.map((article, i) => (
                    <Article key={i} articles={article} />
                ))}
            </View>

        </Container>
    )
}

export default News;