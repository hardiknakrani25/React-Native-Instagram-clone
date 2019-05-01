import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class HomeTab extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>HomeTab </Text>
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