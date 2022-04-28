import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../todoSlice';

Todo.propTypes = {
  text: PropTypes.string,
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '52px',
    alignItems: 'center',
    borderBottom: '1px solid #d0d0d0',
    paddingLeft: '8px',
    paddingRight: '8px',
    userSelect: 'none',
    '&:hover': {
      backgroundColor: '#eee',
    },
    '&:last-child': {
      borderBottom: 0,
    },
  },

  actions: {
    marginLeft: 'auto',
  },

  checkIcon: {
    cursor: 'pointer',
    marginRight: '8px',
  },

  editIcon: {
    cursor: 'pointer',
    marginRight: '8px',
    color: '#1976d2',
  },

  deleteIcon: {
    cursor: 'pointer',
    color: 'red',
  },

  loadingButton: {
    minWidth: '20px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& > *:first-child': {
      margin: 0,
    },
    '&.MuiLoadingButton-loading .MuiButton-startIcon': {
      visibility: 'hidden',
    },
  },
});

function Todo({ todo }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const countFetch = useSelector((state) => state.todo.countFetch);

  const [isUpdating, setUpdate] = useState(false);
  const [isDeleting, setDelete] = useState(false);

  const handleUpdate = (todo) => {
    setUpdate(true);
    dispatch(todoActions.update(todo), onSuccess);
  };

  const onSuccess = () => {};

  const handleDelete = (todo) => {
    setDelete(true);
    dispatch(todoActions.delete(todo._id));
  };

  useEffect(() => {
    setUpdate(false);
    setDelete(false);
  }, [countFetch]);

  return (
    <Stack className={classes.root} direction="row">
      <LoadingButton
        className={classes.loadingButton}
        onClick={() => handleUpdate(todo)}
        startIcon={
          todo.complete ? <CheckCircleIcon color="success" /> : <RadioButtonUncheckedIcon />
        }
        loading={isUpdating}
        loadingPosition="center"
        variant="text"
      ></LoadingButton>

      {todo.text}
      <div className={classes.actions}>
        <LoadingButton
          className={classes.loadingButton}
          onClick={() => handleDelete(todo)}
          startIcon={<DeleteIcon className={classes.deleteIcon} />}
          loading={isDeleting}
          loadingPosition="center"
          variant="text"
        ></LoadingButton>
      </div>
    </Stack>
  );
}

export default Todo;
