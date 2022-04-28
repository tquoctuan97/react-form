import React from 'react';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

function SkeletonTodoList() {
  return (
    <Stack spacing={0}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Stack>
  );
}

export default SkeletonTodoList;
