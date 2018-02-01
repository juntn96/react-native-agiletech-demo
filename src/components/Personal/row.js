import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Button, List, ListItem, Body, Left, Right, Icon, Toast } from 'native-base'

export default ({ item }) => {
    return (
        <ListItem
            icon
            onPress={() => {
                console.log('clicked')
                Toast.show({
                    text: item.title,
                    position: 'bottom'
                })
            }}
        >
            <Body>
                <Text> {item.title} </Text>
            </Body>
            <Right>
                {
                    item.type === 'nav' ?
                        <Icon name='ios-arrow-forward-outline' style={{ color: '#000' }} />
                        :
                        <Text> {item.version} </Text>
                }
            </Right>
        </ListItem>
    )
}