import { StyleSheet } from 'react-native';
import { body, colors, weight } from '../utils/Constants';

export const styles = StyleSheet.create({
    mainContainer: {
        borderRadius: 35,
        alignSelf: 'center',
        backgroundColor: colors.warning,
        width: 72,
        alignItems: 'center'
    },
    tagText: {
        fontSize: body.medium,
        fontWeight: weight.bold,
        color: colors.grey900, 
        paddingHorizontal: 10,
        paddingVertical: 2,
    }
})