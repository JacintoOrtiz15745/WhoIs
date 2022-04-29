import { StyleSheet } from 'react-native'
import { colors, body, weight } from '../utils/Constants'

export const styles = StyleSheet.create({
    mainContainer: { 
        height: 56,
        backgroundColor: colors.primary,
        justifyContent: 'center',  
        marginHorizontal: 24,
        marginBottom: 32,
        borderRadius: 12,
    },
    textButton: {
        fontSize: body.large,
        fontWeight: weight.bold,
        color: colors.white,
        alignSelf: 'center'
    }
})