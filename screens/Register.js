import React, {useState} from "react";

import { Container, Header, Content, Button, Text, Form, Item, Label, Input, Title } from 'native-base';
import { StyleSheet } from "react-native";

const Register = (props) => {

    const { navigation } = props;

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    createUserWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        setEmail("");
        setPassword("");
        };
    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
          setEmail(value);
        } else if (name === "userPassword") {
          setPassword(value);
      };

    return (
        <Container>
            <Content style={styles.container}>
                <Title style={styles.title}>Register</Title>
                <Form>
                    <Item rounded style={{
                        marginBottom: 30,
                        marginTop: 100,
                        width: "90%",
                        alignSelf: "center"
                    }}>
                    <Label style={styles.label}>Username</Label>
                    <Input onChange={e => setName(e.target.value)}/>
                    </Item>
                    <Item rounded style={{
                        marginBottom: 30,
                        width: "90%",
                        alignSelf: "center"
                    }}>
                    <Label style={styles.label}>Email</Label>
                    <Input 
                    name="userEmail"
                    value={email}
                    onChange={event => onChangeHandler(event)}/>
                    </Item>
                    <Item rounded style={{
                        marginBottom: 30,
                        width: "90%",
                        alignSelf: "center"
                    }}>
                    <Label style={styles.label}>Password</Label>
                    <Input 
                    name="userPassword"
                    value={password}
                    onChange={event => onChangeHandler(event)}/>
                    </Item>
                    <Button bordered rounded success style={styles.button} onClick={event => {
                        createUserWithEmailAndPasswordHandler(event, email, password);
                    }}>
                        <Text>Sign Up</Text>
                    </Button>
                </Form>
                <Text style={styles.loginText}>Already have an account?</Text>
                <Button bordered rounded success style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text>Login</Text>
                </Button>
            </Content>
        </Container>
    )
}
}

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
    loginText: {
        color: "#003566",
        alignSelf: "center",
        marginBottom: 8
    },
    title: {
        fontSize: 40,
        fontFamily: "Quicksand",
        marginTop: 25,
        color: "#003566"
    },
})

export default Register;