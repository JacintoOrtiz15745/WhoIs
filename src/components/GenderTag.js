import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/GenderTagStyles';

const GenderTag = (props) => {

    const { title } = props;

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.tagText}>{title}</Text>
        </View>
    )
}

export default GenderTag