import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ButtonStyles';

const Button = (props) => {

  const { title } = props

  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button