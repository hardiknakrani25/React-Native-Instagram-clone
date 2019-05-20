import React, { Component } from "react";

import {
  AsyncStorage,
  Image,
  View,
  Text,
  ImageBackground,
  ActivityIndicator
} from "react-native";

export default class Splash extends Component {
  constructor(props) {
    super();
    // this._storeData();

    setTimeout(() => {
      // this._retrieveData();
      this.props.navigation.navigate("AuthStack");
    }, 1000);
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem("token", "abc");
    } catch (error) {
      console.log(error);
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value != null) {
        console.warn(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
