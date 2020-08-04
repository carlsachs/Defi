import React from "react";

import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Button, Container, Header, Content, Card, CardItem, Body, Text } from  "native-base";

const Beginner = (props) => {

    const { navigation } = props;

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>Basics of Our USD</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  Learn about the basics of our financial system and how the USD operates.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>Add to Favorites</Text>
            </CardItem>
          </Card>
                  <Card>
                  <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>What is Decentralized Finance?</Text>
                  </CardItem>
                  <CardItem button onPress={() => alert("This is Card Body")}>
                    <Body>
                      <Text>
                        Learn the ropes of what DeFi actually is and how it works.
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem footer button onPress={() => alert("This is Card Footer")}>
                    <Text>Add to Favorites</Text>
                  </CardItem>
                </Card>
              <Card>
              <CardItem header button onPress={() => alert("This is Card Header")}>
                <Text>How is DeFi different than Bitcoin?</Text>
              </CardItem>
              <CardItem button onPress={() => alert("This is Card Body")}>
                <Body>
                  <Text>
                    Explore the policies that make decentralized finance different from other crypocurrencies.
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer button onPress={() => alert("This is Card Footer")}>
                <Text>GeekyAnts</Text>
              </CardItem>
            </Card>
          <Card>
          <CardItem header button onPress={() => alert("This is Card Header")}>
            <Text>NativeBase</Text>
          </CardItem>
          <CardItem button onPress={() => alert("This is Card Body")}>
            <Body>
              <Text>
                Click on any carditem
              </Text>
            </Body>
          </CardItem>
          <CardItem footer button onPress={() => alert("This is Card Footer")}>
            <Text>GeekyAnts</Text>
          </CardItem>
        </Card>
        </Content>
      </Container>
    )
}

export default Beginner;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e4f7f0'
    },
    text: {
      color: '#4B6297',
      fontSize: 24,
      fontWeight: 'bold'
    }
  })