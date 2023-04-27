import { Nav, NavLinkStyled } from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && (
        <>
          <p>|</p>
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        </>
      )}
    </Nav>
  );
};
