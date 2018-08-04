import React from 'react';
import styled from 'styled-components';

const SubtleErrorBox = styled.div`
  margin-top: 12px;
  padding: 24px;
  box-shadow: 0px 2px 40px 0 rgba(0, 0, 0, 0.1);

  > p {
    opacity: 0.5;
  }
`;

export default ({ label }) =>
  <SubtleErrorBox>
    <p>{label}</p>
  </SubtleErrorBox>;
