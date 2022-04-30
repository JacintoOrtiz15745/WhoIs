import { StyleSheet } from 'react-native'
import { colors, body, weight } from '../utils/Constants'

export const styles = StyleSheet.create({ 
    galleryIconContainer: {
        flexDirection: 'row',
        marginHorizontal: 27,
        marginTop: 33
    },
    cameraIconContainer: {
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
    },
    imageContainer: {
        width: 150, 
        height: 150, 
        borderRadius: 36,
        alignSelf: 'center',
        marginVertical: 20,
    }
})