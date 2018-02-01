import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Root } from 'native-base'

import { Provider } from 'react-redux'
import { store } from './src/store/configStore'

import AppNavigator from './src/routes/AppNavigator'

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store} style={styles.container}>
                <Root>
                    <AppNavigator />
                </Root>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
