import { Nav, Link } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <Nav>
      <Link to="/">
        Contacts
      </Link>
      <Link to="/register">
        Register
      </Link>
      <Link to="/login">
        Log In
      </Link>
    </Nav>
  );
};
