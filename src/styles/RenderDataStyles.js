import { StyleSheet } from 'react-native';
import { body, colors, heading, weight } from '../utils/Constants';

export const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.grey100,
        borderRadius: 16,
        marginBottom: 16,
        marginHorizontal: 16,
        paddingHorizontal: 10
    },
    infoContainer: {
        marginTop: 10,
        marginBottom: 22,
        width: '75%',
    },
    textTitle: {
        fontSize: heading.h4,
        fontWeight: weight.bold,
        color: colors.black,
        marginBottom: 10,
    },
    textInfo: {
        fontSize: body.large,
        fontWeight: weight.bold,
        color: colors.black
    },
    imageAndVoteContainer: {
        marginVertical: 10,
    },
    imageContainer: {
        width: 77,
        height: 129,
        borderRadius: 16,
    },
    voteAverage: {
        fontSize: body.large,
        fontWeight: weight.bold,
        color: colors.grey900,
        alignSelf: 'center',
        marginTop: 10,
    }
})