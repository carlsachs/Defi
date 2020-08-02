import React from "react";
import { Container, Header, Content, Button, Text, Form, Item, Label, Input } from 'native-base';
import { StyleSheet } from "react-native";

const Login = (props) => {

    const { navigation } = props;

    return (
        <Container>
            <Content style={styles.container}>
                <Form>
                    <Item rounded style={{
                        marginBottom: 30,
                        marginTop: 100
                    }}>
                    <Label style={styles.label}>Username</Label>
                    <Input />
                    </Item>
                    <Item rounded style={{
                        marginBottom: 30
                    }}>
                    <Label style={styles.label}>Password</Label>
                    <Input />
                    </Item>
                </Form>
                <Button bordered rounded success>
                    <Text>Login</Text>
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
    }
})