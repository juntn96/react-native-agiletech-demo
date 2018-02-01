import React, { Component } from 'react';
import { View, Dimensions, TextInput, StyleSheet, Text } from 'react-native'
import { Container, Content, Button, Footer } from 'native-base'
import { reduxForm, Field } from 'redux-form'
import InputForm from '../InputForm'

import styles from './styles'

import validate from '../../utils/validate'

class Login extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }

    _onLoginPress = (values, dispatch, props) => {
        validate(values)
        this.props.navigation.navigate('Personal')
    }

    _onForgotPress = () => {
        console.log('press')
    }

    render() {
        const { handleSubmit, submitting, onSubmit } = this.props
        return (
            <Container>
                <Content>
                    <View
                        style={styles.container}
                    >
                        <Text>phone: 1 and pass: 1</Text>
                        <Field name='phone' keyboardType='numeric' placeholder='Số điện thoại' secureTextEntry={false} component={InputForm} />
                        <Field name='password' keyboardType='default'  placeholder='Mật khẩu' secureTextEntry={true} component={InputForm} />
                        <Text
                            onPress={this._onForgotPress}
                            style={styles.forgotPass}
                        >Quên mật khẩu</Text>
                        <Button
                            bordered dark full
                            style={styles.loginButton}
                            onPress={handleSubmit((values) => {
                                this._onLoginPress(values)
                            })}
                        >
                            <Text
                                style={styles.loginText}
                            >Đăng nhập</Text>
                        </Button>
                        <View style={styles.footer} >
                            <Text>Chưa có tài khoản?</Text>
                            <Button
                                transparent bordered success
                                style={styles.registerButton} >
                                <Text style={styles.registerText} >Đăng kí</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default reduxForm({
    form: 'login',
})(Login)
