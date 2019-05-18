import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  ImageBackground,
  ActivityIndicator
} from "react-native";

export default class Splash extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../assets/instaLogoWhiteHD.png")}
            style={{ height: 60, width: 200 }}
          />
          <ActivityIndicator
            style={{ marginTop: 20 }}
            size="large"
            color="white"
          />
        </View>
      </ImageBackground>
    );
  }
}
