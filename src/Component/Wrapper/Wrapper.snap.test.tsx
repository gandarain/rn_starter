import * as React from 'react';
import renderer from 'react-test-renderer';

import Utils from '../../Utils';

const {
  DefaultData: { emptyString },
} = Utils;
import Wrapper from './Wrapper.component';

const defaultProps = {
  children: emptyString,
};

describe('<Wrapper />', () => {
  it('Should render Wrapper', () => {
    const tree = renderer.create(<Wrapper {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
