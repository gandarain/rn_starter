import React from 'react';
import { Text } from 'react-native';

import config from './GeneralText.config';
import { Props } from './types';

/**
 * GeneralText
 * @param {Props} props - props
 * @return {JSX.Element} - GeneralText Component
 * @constructor
 */
const GeneralText: React.FC<Props> = (): JSX.Element => <Text>Hello</Text>;

GeneralText.displayName = config.displayName;
GeneralText.defaultProps = config.defaultProps;

export default GeneralText;
