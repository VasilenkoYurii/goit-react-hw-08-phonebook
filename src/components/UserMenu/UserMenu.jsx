import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/authSlice/operations';
import { UserPrg, UserButton, UserMenuBox } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuBox>
      <UserPrg>Welcome, {user.name}</UserPrg>
      <UserButton
        type="button"
        onClick={() => {
          handleLogOut();
        }}
      >
        Logout
      </UserButton>
    </UserMenuBox>
  );
};
