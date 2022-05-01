import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ButtonLoaderStyles';
import { colors } from '../utils/Constants';

const TYPES = ['primary', 'success', 'warning', 'error', 'black'];

const ButtonLoader = props => {
  const { tittle, type, onPress } = props;

  const btnType = TYPES.includes(type) ? type : 'primary';

  const btnStyle = {
    borderRadius: 16,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 7,
    marginBottom: 20,
    backgroundColor:
      btnType === 'primary'
      ? colors.primary
      : btnType === 'success'
      ? colors.success
      : btnType === 'warning'
      ? colors.warning
      : btnType === 'error'
      ? colors.error
      : colors.primary
  };

  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={styles.titleButton}>{tittle}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLoader;


