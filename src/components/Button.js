import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 48px;
  border-radius: 4px;
  border: none;
  transition: 160ms all;
  cursor: pointer;
  font-size: 16px;
  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }  
`;

export const PrimaryButton = Button.extend`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  :hover {
    background-color: ${props => props.theme.colors.secondary};;
  }
`;

export const SubtleButton = Button.extend`
  color: ${props => props.theme.colors.primary};
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

