import { StyleSheet } from 'react-native';

import type { Styles } from './types';

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#333333',
  },
});