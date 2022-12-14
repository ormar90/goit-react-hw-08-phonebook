import * as yup from 'yup';
import { Button, FieldStyled, FormStyled, Label, Message } from './RegisterForm.styled';
import { ErrorMessage, Formik } from 'formik';
import { Wrapper } from 'components/App.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';

const initialValues = {
    name: '',
    email: '',
    password: '',
  }

let schema = yup.object().shape({
    name: yup
        .string()
        .required(),
    email: yup
        .string()
        .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please insert a valid email address.")
        .required(),
    password: yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "Password must be minimum eight characters, at least one letter and one number:")
        .required()
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, active) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    active.resetForm();
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormStyled>
          <Label htmlFor="name">
                    Name
                    <FieldStyled
                        type="text"
                        name="name"
                    />
                    <ErrorMessage name="name" component={Message} />
                </Label>
          <Label htmlFor='email'>
            Email
            <FieldStyled
              type="text"
              name="email"
            />
            <ErrorMessage name="email" component={Message} />
          </Label>
          <Label htmlFor='password'>
            Password
            <FieldStyled
              type="password"
              name="password"
            />
            <ErrorMessage name="password" component={Message} />
          </Label>
          <Button type="submit">
                    <span>Log In</span>
                </Button>
        </FormStyled>
      </Formik>
    </Wrapper>
  );
};
