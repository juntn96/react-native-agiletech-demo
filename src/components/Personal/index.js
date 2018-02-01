import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Container, Header, Content, Button, List, ListItem, Body, Left, Right, Icon, Toast } from 'native-base'
import ItemRow from './row'

import data from '../../utils/personal-options'

class Personal extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerBackTitle: null,
            headerTitle: 'Thông tin cá nhân'
        }
    }

    _renderRow = (item) => {
        return <ItemRow item={item} />
    }

    render() {
        return (
            <Container>
                <Content>
                    <List
                        dataArray={data}
                        renderRow={(item) => this._renderRow(item)}
                    />
                </Content>
            </Container >
        );
    }
}

export default Personal;
