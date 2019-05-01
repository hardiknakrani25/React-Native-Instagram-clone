import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Icon, Container, Content} from 'native-base'

import CardComponent from '../CardComponent';

export default class HomeTab extends Component {


    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-home" style={{color: tintColor}}/>
        )
    }


    render() {
        return (
            <Container style={styles.container}>
                <Content>

                    <CardComponent imageSource="1" likes="100"/>

                    <CardComponent imageSource="2" likes="200"/>


                    <CardComponent imageSource="3" likes="300"/>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})