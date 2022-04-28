import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const useStyles = makeStyles({
  root: {
    marginBottom: 40,
    display: 'flex',
    alignItems: 'flex-start',
  },
});

function TodoForm(props) {
  const classes = useStyles();

  const schema = yup.object({
    text: yup.string().required('Please enter a todo'),
  });

  const form = useForm({
    defaultValues: {
      text: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <form className={classes.root} onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField
        name="text"
        label="What are you doing today?"
        fullWidth
        form={form}
        variant="outlined"
      />
      <Button type="submit" variant="contained" sx={{ mt: 1, ml: 1, minHeight: '56px' }}>
        Add
      </Button>
    </form>
  );
}

export default TodoForm;
