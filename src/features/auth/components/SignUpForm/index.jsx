import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import RadioField from 'components/form-controls/RadioField';
import SelectField from 'components/form-controls/SelectField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
};

function SignUpForm(props) {
  const schema = yup
    .object({
      firstName: yup.string().trim().required('First Name is required'),
      lastName: yup.string().trim().required('Last Name is required'),
      hobby: yup.string().required('Hooby is required'),
      gender: yup.string().required('Gender is required'),
      email: yup
        .string()
        .required('Email is require')
        .lowercase()
        .trim()
        .matches(
          /(([a-zA-Z0-9_-\S]+)([.{1}])?([a-zA-Z0-9_-\S]+)@vinova([.])com([.])vn$|([a-zA-Z0-9_-\S]+)([.{1}])?([a-zA-Z0-9_-\S]+)@vinova([.])com([.])sg$)/,
          { message: 'Please enter valid email. Ex: email@vinova.com.vn' }
        ),
      phoneNumber: yup
        .string()
        .trim()
        .required('Phone Number is required')
        .trim()
        .matches(/(^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$)/, {
          message: 'Please enter valid phone number',
        }),
      password: yup
        .string()
        .required('Please enter password')
        .min(6, 'Please enter at least 6 characters'),
      confirmPassword: yup
        .string()
        .required('Please confirm password')
        .oneOf([yup.ref('password')], 'Password does not match'),
    })
    .required();

  const form = useForm({
    // defaultValues: {
    //   firstName: '',
    //   lastName: '',
    //   hobby: '',
    //   gender: '',
    //   email: '',
    //   phoneNumber: '',
    //   password: '',
    //   confirmPassword: '',
    // },
    // resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <Box
      sx={{
        marginTop: 8,
      }}
    >
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputField name="firstName" label="First Name" fullWidth form={form} />
          </Grid>
          <Grid item xs={12}>
            <InputField name="lastName" label="Last Name" fullWidth form={form} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField
              name="hobby"
              label="Hobby"
              form={form}
              fullWidth
              options={[
                // { value: '', label: 'None' },
                { value: 'Listen to music', label: 'Listen to music' },
                { value: 'Read book', label: 'Read book' },
                { value: 'Watch TV', label: 'Watch TV' },
                { value: 'Others', label: 'Others' },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RadioField
              name="gender"
              label="Gender"
              form={form}
              fullWidth
              options={[
                { value: 'Female', label: 'Female' },
                { value: 'Male', label: 'Male' },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField name="email" label="Email" fullWidth form={form} />
          </Grid>

          <Grid item xs={12}>
            <InputField name="phoneNumber" label="Phone Number" fullWidth form={form} />
          </Grid>
          <Grid item xs={12}>
            <PasswordField name="password" label="Password" fullWidth form={form} />
          </Grid>
          <Grid item xs={12}>
            <PasswordField name="confirmPassword" label="Confirm Password" fullWidth form={form} />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
      </form>
    </Box>
  );
}

export default SignUpForm;
