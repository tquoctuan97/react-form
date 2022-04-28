import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

SelectField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,

  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};

function SelectField(props) {
  const { form, name, label, options } = props;
  const { formState } = form;
  const hasError = !!formState.errors[name];
  return (
    <FormControl variant="standard" margin="dense" fullWidth error={!!hasError}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <Select {...field} labelId={`${name}-label`} fullWidth>
            {options.map((option, index) => {
              return (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        )}
      />
      {hasError && <FormHelperText>{formState.errors[name]?.message}</FormHelperText>}
    </FormControl>
  );
}

export default SelectField;
