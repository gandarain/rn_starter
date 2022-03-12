import React from 'react';
import { View, Text } from 'react-native';

import styles from './Welcome.styles';

/**
 * WelcomeScreen
 * @returns {React.FC<Props>} - Component
 */
const WelcomeScreen: React.ReactNode = () => (
  <View style={styles.container}>
    <Text>Hello</Text>
  </View>
);

export default WelcomeScreen;
