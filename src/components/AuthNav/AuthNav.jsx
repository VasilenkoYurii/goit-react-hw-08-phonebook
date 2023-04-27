import { AuthNavBox, NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavBox>
      <NavLinkStyled to="/register">Register</NavLinkStyled>|
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </AuthNavBox>
  );
};
