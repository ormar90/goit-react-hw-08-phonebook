import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "redux/Auth/operations";
import { Routes, Route } from "react-router-dom"
import { Layout } from "./Layout";
import { Contacts } from "pages/Contacts";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { NotFound } from "./NotFound/NotFound";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

export const App = () => {
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