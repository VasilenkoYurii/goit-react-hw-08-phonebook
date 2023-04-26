import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppBarContainer } from './AppBar.styled';

export const AppBar = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <AppBarContainer>
      <Navigation />
      {/* <UserMenu /> */}
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </AppBarContainer>
  );
};
