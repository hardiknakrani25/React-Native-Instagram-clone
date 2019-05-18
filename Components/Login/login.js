import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import {
  Container,
  Content,
  Text,
  Input,
  Item,
  InputGroup,
  Icon
} from "native-base";

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <Container>
          <Content>
            <Image
              source={require("../../assets/instagram.png")}
              style={styles.image}
            />
            <InputGroup style={styles.input} rounded>
              <Input placeholder="Email" />
            </InputGroup>
            <InputGroup style={styles.input} rounded>
              <Input secureTextEntry placeholder="password" />
            </InputGroup>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    marginTop: 22,
    alignSelf: "center",
    marginBottom: 12,

    fontSize: 48,
    fontFamily: "Noteworthy-Bold"
  },
  input: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    alignSelf: "center"
  },
  image: {
    marginTop: 20,
    alignSelf: "center",
    width: 200,
    height: 60
  }
});
