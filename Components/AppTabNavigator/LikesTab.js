import React, { Component } from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import {
  Header,
  Icon,
  Container,
  Content,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";

export default class LikesTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-heart" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={[styles.androidHeader]}>
          <Left />
          <Body style={[styles.androidHeaderTitle]}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Activity</Text>
          </Body>
          <Right />
        </Header>
        <Content />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  androidHeader: {
    ...Platform.select({
      android: {
        backgroundColor: "white"
      }
    })
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: "flex-end"
      }
    })
  }
});
