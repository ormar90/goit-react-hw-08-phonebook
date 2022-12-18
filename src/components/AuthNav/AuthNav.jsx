import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/Auth/selectors";
import { Nav, Link } from "./AuthNav.styled";

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <Nav>
      <Link to="/">
        Contacts
      </Link>
      {!isLoggedIn
        && <>
        <Link to="/register">
        Register
      </Link>
      <Link to="/login">
        Log In
      </Link>
          </>}
    </Nav>
  );
};
