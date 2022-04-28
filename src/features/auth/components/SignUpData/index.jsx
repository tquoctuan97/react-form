import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

SignUpData.propTypes = {
  data: PropTypes.object.isRequired,
};

function SignUpData(props) {
  const { data } = props;
  return (
    <div>
      <Typography>DATA SUBMIT</Typography>
      <Typography>First Name: {data.firstName}</Typography>
      <Typography>Last Name: {data.lastName}</Typography>
      <Typography>Gender: {data.gender}</Typography>
      <Typography>Email: {data.email}</Typography>
      <Typography>Phone Number: {data.phoneNumber}</Typography>
      <Typography>Password: {data.password}</Typography>
      <Typography>Confirm Password: {data.confirmPassword}</Typography>
    </div>
  );
}

export default SignUpData;
