import {StyleSheet} from 'react-native';
import { colors, heading, body, weight } from '../utils/Constants';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        backgroundColor: colors.white
    },
    container: {
        margin: 16,
    },
    HeyDev: {
        fontSize: heading.h4,
        fontWeight: weight.bold,
        color: colors.black,
        marginTop: 44,
    },
    subtitle: {
        fontSize: body.large,
        fontWeight: weight.bold,
        color: colors.grey600,
        marginTop: 4,
    },
    whoIs: {
        fontSize: heading.h5,
        fontWeight: weight.bold,
        color: colors.grey900,
        marginTop: 32,
    },
})