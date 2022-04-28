import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, fullWidth } = props;
  const [showPassword, setShowPassword] = useState(false);
  const { formState } = form;
  const hasError = !!formState.errors[name];
  const toogleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  return (
    <FormControl error={hasError} fullWidth={fullWidth} variant="standard">
      <InputLabel htmlFor={name}>{label}</InputLabel>

      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <Input
            name={name}
            control={form.control}
            {...field}
            id={name}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={toogleShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        )}
      />
      {hasError && <FormHelperText>{formState.errors[name]?.message}</FormHelperText>}
    </FormControl>
  );
}

export default PasswordField;
