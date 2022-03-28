import * as React from 'react';
import renderer from 'react-test-renderer';

import Utils from '../../Utils';

const {
  DefaultData: { emptyString },
} = Utils;
import GeneralText from './GeneralText.component';

const defaultProps = {
  title: emptyString,
  size: 0,
  color: emptyString,
  variant: emptyString,
};

describe('<GeneralText />', () => {
  it('Should render GeneralText', () => {
    const tree = renderer.create(<GeneralText {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
