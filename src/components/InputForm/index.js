import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';
import styles from './styles'

export default ({ keyboardType, placeholder, secureTextEntry, meta: { touched, error, warning }, input: { onChange, ...restInput } }) => {
    console.log('error: ', error)
    return (
        <View
            style={styles.container} 
        >
            <TextInput
                keyboardType={keyboardType}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                underlineColorAndroid='transparent'
                style={styles.input}
                onChange={onChange}
                {...restInput} />
            {
                touched && (
                    (
                        error && <Text style={styles.error} >{error}</Text>
                    )
                    ||
                    (
                        warning && <Text style={styles.warning}>{warning}</Text>
                    )
                )
            }
        </View>
    )
}
