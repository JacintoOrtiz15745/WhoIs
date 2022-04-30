import {StyleSheet} from 'react-native';
import {colors, body, weight} from '../utils/Constants';

export const styles = StyleSheet.create({
  selectImageText: {
    fontSize: body.large,
    fontWeight: weight.bold,
    color: colors.grey500,
    marginTop: 37, 
    alignSelf: 'center',
  },
});
