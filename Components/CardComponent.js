import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';


export default class CardComponent extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>CardComponent</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})