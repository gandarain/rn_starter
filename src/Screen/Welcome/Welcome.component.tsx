import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import type { Props } from './types';
import styles from './Welcome.styles';

/**
 * WelcomeScreen
 * @returns {React.FC<Props>} - Component
 */
const WelcomeScreen: React.FC<Props> = (): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello</Text>
    <Icon name="rocket" size={30} color="#900" />
  </View>
);

export default WelcomeScreen;
