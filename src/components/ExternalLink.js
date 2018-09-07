import { PrimaryButton } from './Button';

const Link = PrimaryButton.withComponent('a');

export default Link.extend`
  text-decoration: none;
`;
