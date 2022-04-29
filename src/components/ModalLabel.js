import React from 'react';
import { View, Text } from 'react-native';
import { text } from '../utils/Constants';
import { styles } from '../styles/ModalLabelStyles';

const ModalLabel = (props) => {

  const { tittle } = props;

  return (
    <View>
      <Text style={styles.selectImageText}>{tittle}</Text>
    </View>
  )
}

export default ModalLabel