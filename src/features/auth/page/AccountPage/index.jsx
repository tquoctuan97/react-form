import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { authActions } from 'features/auth/authSlice';
import SignUpData from 'features/auth/components/SignUpData';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

AccountPage.propTypes = {};

function AccountPage(props) {
  const userInfo = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="sm">
      <SignUpData data={userInfo} />
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          dispatch(authActions.logout());
        }}
      >
        Logout
      </Button>
    </Container>
  );
}

export default AccountPage;
