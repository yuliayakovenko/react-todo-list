import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export const TodoItem = ({ item, deleteTodoItem, changeIsCompleted }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" type="button" onClick={deleteTodoItem(item.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={item.isCompleted}
          onChange={changeIsCompleted(item.id)}
          inputProps={{ 'aria-label': 'Mark todo as completed' }}
          title="Mark todo as completed"
        />
      </ListItemIcon>
      <ListItemText primary={item.title} className={item.isCompleted ? 'todoIsCompeted' : ''} />
    </ListItem>
  );
};
