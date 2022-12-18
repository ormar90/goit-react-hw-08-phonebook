import { Wrapper } from "components/App.styled";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/Auth/selectors";
import { Header } from "./Navigation.styled";

export const Navigation = () => {
const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
      <Wrapper>
      <Header>
        <AuthNav />
        {isLoggedIn && <UserMenu />}
      </Header>
    </Wrapper>
  );
};