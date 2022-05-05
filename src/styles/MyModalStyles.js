import { StyleSheet } from 'react-native';
import { colors, body, weight } from '../utils/Constants';

export const styles = StyleSheet.create({
    selectImageContainer: {
        marginTop: 10,
        borderColor: colors.primary,
        borderWidth: 2,
        borderStyle: 'dashed',
        height: 142,
    },
    selectImage: {
        width: '100%',
        height: 137,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 44,
        height: 41,
    },
    textIcon: {
        fontSize: body.medium,
        fontWeight: weight.bold,
        color: colors.primary,
        marginTop: 14,
    },
    modal: {
        justifyContent: 'flex-end',
        top: 0,
        left: 0,
        right: 0,
        padding: 0,
        margin: 0,
        marginHorizontal: 0,
    },
    mainContainer: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    closeModal: {
        width: 48,
        height: 5,
        backgroundColor: colors.grey100,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 12,
    },
})