import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GeneralText, Wrapper } from '../../Component';
import { Colors, Fonts } from '../../Constant';
import type { Props } from './types';
import styles from './Welcome.styles';

/**
 * WelcomeScreen
 * @returns {React.FC<Props>} - Component
 * @constructor
 */
const WelcomeScreen: React.FC<Props> = (): JSX.Element => (
  <Wrapper>
    <Text style={styles.title}>Hello</Text>
    <GeneralText
      title="Hello"
      color={Colors.BLACK}
      variant={Fonts.VARIANT.BOLD}
      size={Fonts.SIZE.LARGE}
    />
    <Icon name="rocket" size={Fonts.SIZE.LARGE} color={Colors.RED} />
  </Wrapper>
);

export default WelcomeScreen;
