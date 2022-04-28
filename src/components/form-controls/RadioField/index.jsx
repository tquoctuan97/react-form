import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

RadioField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,

  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};

function RadioField(props) {
  const { form, name, label, fullWidth, options } = props;
  const { formState } = form;
  const hasError = !!formState.errors[name];
  return (
    <FormControl
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
      component="fieldset"
      margin="dense"
      fullWidth={fullWidth}
      error={hasError}
    >
      <FormLabel component="label" sx={{ marginRight: 2 }}>
        Gender:
      </FormLabel>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <RadioGroup {...field} row aria-label={label} name={name}>
            {options.map((option, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              );
            })}
          </RadioGroup>
        )}
      />
      {hasError && (
        <FormHelperText sx={{ marginLeft: 0, marginTop: '8px' }}>
          {formState.errors[name]?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default RadioField;
