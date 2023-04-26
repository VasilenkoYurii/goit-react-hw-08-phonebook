import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/authSlice/operations';
import { UserPrg, UserButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <UserPrg>Welcome, {user.name}</UserPrg>
      <UserButton
        type="button"
        onClick={() => {
          handleLogOut();
        }}
      >
        Logout
      </UserButton>
    </div>
  );
};
