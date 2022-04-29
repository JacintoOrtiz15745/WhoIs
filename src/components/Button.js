import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/ButtonStyles'

const Button = (props) => {

  const {tittle} = props

  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Text style={styles.textButton}>{tittle}</Text>
    </TouchableOpacity>
  )
}

export default Button