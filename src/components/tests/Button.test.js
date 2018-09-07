import React from 'react';
import renderer from 'react-test-renderer';
import { PrimaryButton, SubtleButton } from '../Button';
import theme from '../../theme';

const log = (e) => console.log(e);

describe('Button.js', () => {
  it('PrimaryButton renders correctly', () => {
    const tree = renderer
      .create(<PrimaryButton onClick={log} theme={theme}>Hello!</PrimaryButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('SubtleButton renders correctly', () => {
    const tree = renderer
      .create(<SubtleButton onClick={log} theme={theme}>SubtleButton!</SubtleButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
