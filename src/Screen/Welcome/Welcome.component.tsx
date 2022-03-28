import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GeneralText, Wrapper, Button } from '../../Component';
import { Colors, Fonts, Button as ButtonConstant } from '../../Constant';
import type { Props } from './types';
import styles from './Welcome.styles';

/**
 * renderButton
 * @returns {ReactElement} - Button Component
 * @private
 */
const renderButton = (): ReactElement => (
  <Button
    onPress={() => {}}
    width={ButtonConstant.WIDTH.LARGE}
    height={ButtonConstant.HEIGHT.LARGE}
    color={ButtonConstant.COLOR.BLUE}
  >
    <GeneralText
      title="Button"
      color={Colors.BLACK}
      variant={Fonts.VARIANT.BOLD}
      size={Fonts.SIZE.LARGE}
    />
  </Button>
);

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
    <View style={styles.containerButton}>{renderButton()}</View>
  </Wrapper>
);

export default WelcomeScreen;
