import React from "react";
import { Container, Header, Content, Button, Text, Form, Item, Label, Input } from 'native-base';
import { StyleSheet } from "react-native";

const Register = (props) => {

    const { navigation } = props;

    return (
        <Container>
            <Content style={styles.container}>
                <Form>
                    <Item rounded style={{
                        marginBottom: 30,
                        marginTop: 100,
                        width: "90%",
                        alignSelf: "center"
                    }}>
                    <Label style={styles.label}>Username</Label>
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
                </Form>
                <Button bordered rounded success style={styles.button}>
                    <Text>Submit</Text>
                </Button>
                <Text>Already have an account?</Text>
                <Button bordered rounded success style={styles.button}>
                    <Text>Login</Text>
                </Button>
            </Content>
        </Container>
    )
}

export default Register;

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
    }
})