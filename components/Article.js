import React from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Button, Container, Header, Content, Card, CardItem, Body, Text } from  "native-base";

const Article = ( { articles } ) => {
    
    
    return (
        <Container>
            <Content padder>
            <Card>
                <CardItem header>
                <Text>{articles.title}</Text>
                </CardItem>
                <CardItem>
                <Body>
                    <Text>
                    {articles.summary}
                    </Text>
                </Body>
                </CardItem>
                <CardItem footer>
                <Text>Add to Favorites</Text>
                </CardItem>
            </Card>
            </Content>
        </Container>
    )
}