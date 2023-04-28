import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeTitleBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const HomeTitle = styled.h1`
  width: 300px;
  text-align: justify;

  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: #214242;
  border-bottom: 1px solid black;

  transition: all 0.5s ease;

  &:hover {
    color: #3d8f8f;
    border-bottom: 1px solid #3d8f8f;
  }
`;
