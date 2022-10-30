import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

import { TodoList } from './components/Todos/TodoList';

import './App.css';

const initialTodoList = [];

function App() {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [todoTitle, setTodoTitle] = useState('');

  function addTodoItem(event) {
    event.preventDefault();

    if (todoTitle === '') {
      return;
    }

    setTodoList((prevState) => [
      ...prevState,
      {
        title: todoTitle,
        isCompleted: false,
        id: uuidv4(),
      },
    ]);

    clearTitle();
  }

  function onTitleChange(event) {
    setTodoTitle(event.target.value);
  }

  function clearTitle() {
    setTodoTitle('');
  }

  function deleteTodoItem(todoId) {
    return () => {
      const filteredTodoList = todoList.filter((item) => {
        return item.id !== todoId;
      });

      setTodoList(filteredTodoList);
    };
  }

  function changeIsCompleted(todoId) {
    return () => {
      const newTodoList = todoList.map((item) => {
        if (item.id === todoId) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      });

      setTodoList(newTodoList);
    };
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
              <Button type="submit" variant="contained">
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <TodoList todoList={todoList} deleteTodoItem={deleteTodoItem} changeIsCompleted={changeIsCompleted} />
    </Container>
  );
}

export default App;
