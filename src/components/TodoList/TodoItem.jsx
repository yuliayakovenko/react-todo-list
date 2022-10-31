import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';

export const TodoItem = ({ item, deleteTodoItem, changeIsCompleted }) => {
  const RemoveButton = (
    <Tooltip title="Delete todo" placement="left">
      <IconButton edge="end" aria-label="Delete todo" type="button" onClick={deleteTodoItem(item.id)}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );

  return (
    <ListItem secondaryAction={RemoveButton}>
      <ListItemIcon>
        <Tooltip title="Mark todo as completed" placement="left">
          <Checkbox
            edge="start"
            checked={item.isCompleted}
            onChange={changeIsCompleted(item.id)}
            inputProps={{ 'aria-label': 'Mark todo as completed' }}
          />
        </Tooltip>
      </ListItemIcon>
      <ListItemText primary={item.title} className={item.isCompleted ? 'todoIsCompeted' : ''} />
    </ListItem>
  );
};
