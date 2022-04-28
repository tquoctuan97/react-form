import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  variant: 'standard',
};

function InputField(props) {
  const { form, name, label, fullWidth, disabled, variant } = props;
  const { formState } = form;
  const hasError = !!formState.errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant={variant}
          margin="dense"
          fullWidth={fullWidth}
          disabled={disabled}
          error={hasError}
          helperText={formState.errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
