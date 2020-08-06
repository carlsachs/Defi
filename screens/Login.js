import React from "react";
import { Container, Header, Content, Button, Text, Form, Item, Label, Input, Title } from 'native-base';
import { StyleSheet } from "react-native";

const Login = (props) => {

    const { navigation } = props;

    return (
        <Container>
            <Content style={styles.container}>
            <Title style={styles.title}>Login</Title>
                <Form>
                    <Item rounded style={{
                        marginBottom: 30,
                        marginTop: 100,
                        width: "90%",
                        alignSelf: "center"
                    }}>
                    <Label style={styles.label}>Email</Label>
                    <Input />
                    </Item>
                    <Item rounded style={{
                        marginBottom: 30,
                        width: "90%",
                        alignSelf: "center"
                    }}>
                    <Label style={styles.label}>Password</Label>
                    <Input />
                    </Item>
                    <Button bordered rounded success style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text>Submit</Text>
                    </Button>
                </Form>
                <Text style={styles.registerText}>Don't have an account?</Text>
                <Button bordered rounded success style={styles.button} onPress={() => navigation.navigate('Register')}>
                    <Text>Register</Text>
                </Button>
                <Button bordered rounded success style={styles.button}>
                <Text>Google Sign-In</Text>
            </Button>
            </Content>
        </Container>
    )
}

export default Login;

const styles = StyleSheet.create({
    label: {
        paddingLeft: 15,
        color: "#003566"
    },
    button: {
        alignSelf: "center",
        width: 200,
        justifyContent: "center",
        marginBottom: 15
    },
    title: {
        fontSize: 40,
        fontFamily: "Quicksand",
        marginTop: 25,
        color: "#003566"
    },
    registerText: {
        color: "#003566",
        alignSelf: "center",
        marginBottom: 8
    },
})