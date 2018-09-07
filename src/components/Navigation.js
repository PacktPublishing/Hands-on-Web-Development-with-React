import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserRole from '../enums/UserRole';

const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 12px;
`;

const NavigationItem = styled.li`
  margin: 4px 8px;
  ${props => props.grow ? 
    `flex-grow: ${props.grow}` : 
    '' 
  };
  > a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 14px;
`;

export default ({ userRole, onLogout, onSearch }) =>
  <nav>
    <NavigationList>
      <NavigationItem>
        <Link to="/">Home</Link>
      </NavigationItem>
      {userRole > UserRole.ANONYMOUS &&
        <NavigationItem>
          <Link to="/add-job">Add Job</Link>
        </NavigationItem>}
      {userRole > UserRole.ANONYMOUS &&
        <NavigationItem>
          <Link to="/manage">Posted Jobs</Link>
        </NavigationItem>}
      {userRole === UserRole.ADMIN &&
        <NavigationItem>
          <Link to="/dashboard">Dashboard</Link>
        </NavigationItem>}
      <NavigationItem grow={3}>
        <Input onChange={onSearch} type="text" placeholder="Search for Jobs" />
      </NavigationItem>
      {userRole > UserRole.ANONYMOUS ?
        <NavigationItem>
          <Link to="/" onClick={onLogout}>Log out</Link>
        </NavigationItem> :
        <NavigationItem>
          <Link to="/login">Login</Link>
        </NavigationItem>
      }
    </NavigationList>
  </nav>;
