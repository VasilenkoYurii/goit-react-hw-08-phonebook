import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
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
