import Container from '@mui/material/Container';
import { authActions } from 'features/auth/authSlice';
import SignUpForm from 'features/auth/components/SignUpForm';
import React from 'react';
import { useDispatch } from 'react-redux';

function SignUpPage(props) {
  const dispatch = useDispatch();

  const handleSignUpFormSubmit = (values) => {
    dispatch(authActions.register(values));
    dispatch(authActions.login());
  };

  return (
    <Container component="main" maxWidth="sm">
      <SignUpForm onSubmit={handleSignUpFormSubmit} />
    </Container>
  );
}

export default SignUpPage;
