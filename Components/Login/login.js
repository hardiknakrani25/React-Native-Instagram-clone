import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
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

          <Button style={{ marginTop: 20, alignSelf: "center" }} bordered light>
            <Text> Log In </Text>
          </Button>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: 30
              //   position: "absolute",
              //   bottom: 70
            }}
          >
            <View>
              <Text style={{ color: "white" }}>Don't Have account? </Text>
            </View>
            <View style={{ marginLeft: 3 }}>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
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
    marginTop: 170,
    marginBottom: 20,
    alignSelf: "center",
    width: 200,
    height: 60
  }
});
