import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ButtonStyles';

const Button = (props) => {

  const { title, onPress } = props

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button