import * as React from 'react';
import renderer from 'react-test-renderer';

import WelcomeComponent from './Welcome.component';

describe('<WelcomeComponent />', () => {
  it('Should render WelcomeComponent', () => {
    const tree = renderer.create(<WelcomeComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
