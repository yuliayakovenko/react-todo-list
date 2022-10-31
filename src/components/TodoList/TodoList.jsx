import React, { memo } from 'react';

import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { TodoItem } from './TodoItem';

export const TodoList = memo(({ todoList, deleteTodoItem, changeIsCompleted }) => {
  if (todoList.length === 0) {
    return (
      <Paper>
        <Typography sx={{ padding: '23px 16px', color: '#7c7c7c' }} variant="subtitle1" align="center">
          You have not added any todos
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper>
      <List>
        {todoList.map((item) => {
          return (
            <TodoItem key={item.id} item={item} changeIsCompleted={changeIsCompleted} deleteTodoItem={deleteTodoItem} />
          );
        })}
      </List>
    </Paper>
  );
});
