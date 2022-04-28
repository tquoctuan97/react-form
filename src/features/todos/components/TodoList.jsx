import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import Stack from '@mui/material/Stack';

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
};

function TodoList({ todoList }) {
  return (
    <Stack sx={{ overflow: 'auto', maxHeight: '60vh' }}>
      {todoList.map((todo) => {
        return <Todo key={todo._id} todo={todo} />;
      })}
    </Stack>
  );
}

export default TodoList;
