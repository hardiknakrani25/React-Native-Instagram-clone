import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Image, ImageBackground } from "react-native";
import {
  Container,
  Content,
  Text,
  Input,
  Item,
  InputGroup,
  Icon,
  Button,
  View
} from "native-base";

export default class Login extends Component {
  render() {
    return (
      <Container style={styles.Container}>
        <ImageBackground
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "cover"
          }}
          source={require("../../assets/bg.jpg")}
        >
          <Image
            source={require("../../assets/instaLogoWhiteHD.png")}
            style={styles.image}
          />
          <InputGroup style={styles.input} bordered>
            <Input
              style={{ color: "white" }}
              placeholder="Email"
              placeholderTextColor="white"
            />
          </InputGroup>
          <InputGroup style={styles.input} bordered>
            <Input
              style={{ color: "white" }}
              placeholderTextColor="white"
              secureTextEntry
              placeholder="password"
            />
          </InputGroup>

          <Button style={{ marginTop: 15, alignSelf: "center" }} bordered light>
            <Text> Log In </Text>
          </Button>
        </ImageBackground>
      </Container>
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
    marginTop: 70,
    alignSelf: "center",
    width: 200,
    height: 60
  }
});
