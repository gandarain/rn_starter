import { StyleSheet } from 'react-native';

import { Colors } from '../../Constant';
import type { Styles } from './types';

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: Colors.BLACK,
  },
  containerButton: {
    padding: 20,
    width: '100%',
  },
});
