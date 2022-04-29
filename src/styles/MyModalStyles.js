import {StyleSheet} from 'react-native';
import {colors, body, weight} from '../utils/Constants';

export const styles = StyleSheet.create({
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
        minHeight: 218, 
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
    iconsContainer: {
        flexDirection: 'row',
        marginHorizontal: 27, 
    },
    textIcons: {
        marginLeft: 20,
        marginBottom: 26,
        fontSize: body.large,
        fontWeight: weight.medium,
        color: colors.grey900,
    }, 
    selectPhotoandCameraIcon: {
        width: 24, 
        height: 24
    }
})