import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  // flex-direction: column;

  gap: 10px;

  padding-bottom: 10px;
  margin-bottom: 10px;

  border-bottom: 1px solid #0000003d;
`;

export const NavLinkStyled = styled(NavLink)`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  background-color: #aa9a8e;
  color: black;
  outline: 1px solid black;

  transition: all 0.5s ease;

  &:hover {
    background-color: #988270;
    color: #262626;
  }
`;
