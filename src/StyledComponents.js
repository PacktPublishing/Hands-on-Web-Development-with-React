import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navigation from './components/Navigation';
import { bounce, jello, shake } from 'react-animations';

const Body = styled.div`
  padding: 20px;
  text-align: center;
  p {
    font-size: 1.4em;
  }
`;

const Heading = styled.h1`
  color: blue;
`;

const Paragraph = styled.p`
`;

const ButtonAttemptOne = styled.button`
  padding: 12px 48px;
  color: ${props => props.primary ? '#fff' : 'royalblue'};
  background-color: ${props => props.primary ? 'royalblue' : 'auto'};
  border-radius: 4px;
  border: none;
  transition: 160ms all;
  :hover {
    background-color: ${props => props.primary ? 'crimson' : 'auto'};
    color: ${props => props.primary ? '#fff' : 'crimson'};    
  }
`;

const Button = styled.button`
  padding: 12px 48px;
  border-radius: 4px;
  border: none;
  transition: 160ms all;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: royalblue;
  color: #fff;
  :hover {
    background-color: crimson;
  }
`;

const SubtleButton = styled(Button)`
  color: royalblue;
  :hover {
    color: crimson;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  padding: 12px;
  margin: 12px;
  height: 32px;
  border: 1px solid blue;
  flex: ${props => props.flex || 1};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RotatingAnimation = styled.div`
  animation: ${rotate360} 2s linear infinite;
`;

const bounceAnimation = keyframes`${bounce}`;

const Bounce = styled.div`
  animation: 1s ${bounceAnimation};
`;

export default () =>
  <Body>
    <Navigation />
    <Heading>
      Themes!
    </Heading>
    <Paragraph>
      How do we reuse our constants? 🤔
    </Paragraph>
    <PrimaryButton>
      Sign Up!
    </PrimaryButton>
    <SubtleButton>
      Learn more
    </SubtleButton>
    {/*<RotatingAnimation>*/}
      {/*[Rotation!]*/}
    {/*</RotatingAnimation>*/}
    <Bounce>
    <Box>
      <Item />
      <Item flex={3} />
      <Item flex={3} />
      <Item flex={3} />
      <Item />
    </Box>
    </Bounce>
  </Body>
