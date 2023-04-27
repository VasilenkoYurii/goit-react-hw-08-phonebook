import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavBox = styled.div`
  display: flex;
  align-items: center;

  gap: 15px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
  color: black;
  border-bottom: 4px double black;

  transition: all 0.5s ease;

  &.active {
    color: white;
    border-bottom: 4px double white;

    &:hover {
      color: #66d0d0;
      border-bottom: 4px double #66d0d0;
    }
  }

  &:hover {
    color: #66d0d0;
    border-bottom: 4px double #66d0d0;
  }
`;
