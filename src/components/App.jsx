import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactList/ContactsList";
import { Wrapper } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectContacts } from "redux/Contacts/selectors";
import { refreshUser } from "redux/Auth/operations";
import { Routes, Route } from "react-router-dom"
import { Layout } from "./Layout";
import { selectIsRefreshing } from "redux/Auth/selectors";
import { Contacts } from "pages/Contacts";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { NotFound } from "./NotFound/NotFound";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
        <Route path="login" element={<RestrictedRoute redirectTo="/" component={<Login />} />} />
        <Route path="register" element={<RestrictedRoute redirectTo="/" component={<Register />} />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  }