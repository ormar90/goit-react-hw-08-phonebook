import * as yup from 'yup';
import { Wrapper } from 'components/App.styled';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';
import { Button, FieldStyled, FormStyled, Label, Message } from './LoginForm.styled';

const initialValues = {
    email: '',
    password: '',
  }

let schema = yup.object().shape({    
    email: yup
        .string()
        .matches(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please insert a valid email address.")
        .required(),
    password: yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "Password must be minimum eight characters, at least one letter and one number:")
        .required()
});


export const LoginForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, active) => {
    console.log(values);
    dispatch(
      logIn({
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