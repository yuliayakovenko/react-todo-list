import React from 'react';

import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

import { TodoItem } from './TodoItem';

export const TodoList = ({ todoList, deleteTodoItem, changeIsCompleted }) => {
  if (todoList.length === 0) {
    return null;
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
};
