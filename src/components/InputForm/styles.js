import { StyleSheet, Dimensions } from 'react-native'

const { height: screenHeight, width: screenWidth } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        marginTop: 14,
        marginBottom: 4,
        width: screenWidth
    },
    input: {
        borderColor: '#4F4F4F',
        borderWidth: 0.5,
        height: 50,
        width: screenWidth - 24,
        alignSelf: 'center',
        borderRadius: 5,
        fontSize: 17
    },
    error: {
        color: 'red',
        marginLeft: 12,
        marginTop: 4
    },
    warning: {
        color: 'orange',
        marginLeft: 12,
        marginTop: 4
    }
})

export default styles