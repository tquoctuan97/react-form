import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from '../../../components/Common';
import SkeletonTodoList from '../components/SkeletonTodoList';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { todoActions } from '../todoSlice';

function TodoPage(props) {
  const todoList = useSelector((state) => state.todo.list);
  const isLoading = useSelector((state) => state.todo.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoActions.fetchTodoList());
  }, [dispatch]);

  const handleTodoFormSubmit = async (values) => {
    const newTodo = {
      text: values.text,
      complete: false,
      author: 'Tuan',
    };
    dispatch(todoActions.add(newTodo));
  };

  return (
    <Page title="Todo">
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <Box>{isLoading ? <SkeletonTodoList /> : <TodoList todoList={todoList} />}</Box>
    </Page>
  );
}

export default TodoPage;
