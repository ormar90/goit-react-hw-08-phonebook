import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { selectUser } from 'redux/Auth/selectors';
import { Button, UserMenuWrap } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <UserMenuWrap>
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuWrap>
    </>
  );
};