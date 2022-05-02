import { StyleSheet } from 'react-native';
import { colors, heading, body, weight } from '../utils/Constants';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    imageContainer: {
        width: '100%',
        height: '50%',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    infoMainContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        position: 'absolute',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    leftArrowContainer: {
        position: 'absolute',
        marginTop: 16,
        marginLeft: 16,
    },
    leftArrow: {
        width: 55,
        height: 52,
    },
    leftContainer: {
        alignSelf: 'center',
        alignSelf: 'flex-end',
    },
    rightContainer: {
        alignSelf: 'center',
        alignSelf: 'flex-end',
    },
    actorName: {
        fontSize: heading.h3,
        fontWeight: weight.bold,
        color: colors.grey50,
    },
    tagDirection: {
        alignSelf: 'flex-start',
    },
    popularityTitle: {
        fontSize: body.large,
        fontWeight: weight.bold,
        color: colors.grey50,
        marginBottom: 1,
    },
    popularityText: {
        fontSize: body.large,
        fontWeight: weight.bold,
        color: colors.grey50,
        alignSelf: 'flex-end',
    },
    movieTitle: {
        fontSize: heading.h3,
        fontWeight: weight.bold,
        color: colors.black,
        marginHorizontal: 16,
        marginVertical: 16,
    }
})