import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/ModalLabelStyles';

const ModalLabel = (props) => {

  const { title } = props;

  return (
    <View>
      <Text style={styles.selectImageText}>{title}</Text>
    </View>
  )
}

export default ModalLabel 