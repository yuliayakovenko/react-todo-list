import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

import './App.css';

const initialTodoList = [];

function App() {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [todoTitle, setTodoTitle] = useState('');

  function addTodoItem(event) {
    event.preventDefault();

    if (todoTitle === '') {
      return
    }

    setTodoList((prevState) => ([
      ...prevState,
      {
        title: todoTitle,
        isCompleted: false,
        id: uuidv4(),
      }
    ]))

    clearTitle();
  }

  function onTitleChange(event) {
    setTodoTitle(event.target.value)
  }

  function clearTitle() {
    setTodoTitle('')
  }

  function deleteTodoItem(todoId) {
    return () => {
      const filteredTodoList = todoList.filter((item) => {
        return item.id !== todoId
      });

      setTodoList(filteredTodoList)
    }
  }


  return (
    <Container maxWidth="sm" sx={{ pt: 2 }}>
      <Box sx={{ mb: 2 }}>
        <form onSubmit={addTodoItem}>
          <Grid container spacing={2}>
            <Grid item xs>
              <OutlinedInput
                placeholder="Write todo title"
                fullWidth
                size="small"
                type="text"
                onChange={onTitleChange}
                value={todoTitle}
                variant="outlined"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={clearTitle} edge="end">
                      {todoTitle && <ClearIcon />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">Add</Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Paper>

      <List>
        {todoList.map((item) => {
          return (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" type="button" onClick={deleteTodoItem(item.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={item.title} />
            </ListItem>
          )
        })}
      </List>
      </Paper>
    </Container>
  );
}

export default App;
