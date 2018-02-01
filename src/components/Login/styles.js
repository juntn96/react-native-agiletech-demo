import { StyleSheet, Dimensions } from 'react-native'

const { height: screenHeight, width: screenWidth } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        height: screenHeight - 76,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgotPass: {
        color: 'blue',
        alignSelf: 'flex-start',
        marginLeft: 12
    },
    loginButton: {
        marginLeft: 12,
        marginRight: 12,
        marginTop: 32,
        borderRadius: 5
    },
    loginText: {
        fontSize: 16
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButton: {
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 8,
        alignSelf: 'center'
    },
    registerText: {
        textAlign: 'center'
    }
})

export default styles