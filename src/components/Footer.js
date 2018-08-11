import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = styled.footer`
  padding: 24px;
  display: flex;
  width: 75%;
  margin: 0 auto;
  justify-content: space-between;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export default () =>
  <Footer>
    <div>© React Job Board 2018. </div>
    <FooterLinks>
      <Link to="/terms-of-service">Terms of Service</Link>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </FooterLinks>
  </Footer>
