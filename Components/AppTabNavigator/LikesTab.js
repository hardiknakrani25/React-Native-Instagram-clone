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

import { ButtonGroup } from "react-native-elements";
export default class LikesTab extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedIndex: 1
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-heart" style={{ color: tintColor }} />
    )
  };

  render() {
    const buttons = ["Following", "You"];
    const { selectedIndex } = this.state;
    return (
      <Container style={styles.container}>
        <Header style={[styles.androidHeader]}>
          <Left />
          <Body style={[styles.androidHeaderTitle]}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Activity</Text>
          </Body>
          <Right />
        </Header>
        <View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            // buttonStyle={{ borderRadius: 10 }}
            buttons={buttons}
            selectedButtonStyle={{ backgroundColor: "black" }}
            containerStyle={{ height: 30 }}
          />
        </View>
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
