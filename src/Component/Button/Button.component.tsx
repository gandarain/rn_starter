import React from 'react';
import { TouchableOpacity } from 'react-native';

import config from './Button.config';
import { Props } from './types';
import styles from './Button.styles';

/**
 * Button
 * @param {Props} props - props
 * @return {JSX.Element} - GeneralText Component
 * @constructor
 */
const Button: React.FC<Props> = ({
  onPress,
  height,
  width,
  color,
  children,
}: Props): JSX.Element => (
  <TouchableOpacity
    onPress={() => onPress()}
    style={styles.button(height, width, color)}
  >
    {children}
  </TouchableOpacity>
);

Button.displayName = config.displayName;
Button.defaultProps = config.defaultProps;

export default Button;
