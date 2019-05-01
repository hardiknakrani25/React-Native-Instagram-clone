import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import {Icon, Container, Content, Thumbnail} from 'native-base'

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
                    <View style={{height: 100}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 7
                        }}>
                            <Text>Stories</Text>
                            <Text>Watch All</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}
                            >
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={require('../../assets/storiesHeaderThumbnails/1.jpg')}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={require('../../assets/storiesHeaderThumbnails/2.jpeg')}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={require('../../assets/storiesHeaderThumbnails/3.jpeg')}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={require('../../assets/storiesHeaderThumbnails/4.jpeg')}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={require('../../assets/storiesHeaderThumbnails/5.jpeg')}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={require('../../assets/storiesHeaderThumbnails/6.jpeg')}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={require('../../assets/storiesHeaderThumbnails/7.jpeg')}/>
                                <Thumbnail style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                           source={require('../../assets/storiesHeaderThumbnails/8.jpeg')}/>
                            </ScrollView>

                        </View>
                    </View>

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