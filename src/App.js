import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/Todos/TodoList';

import './App.css';

const initialTodoList = [];

function App() {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [todoTitle, setTodoTitle] = useState('');

  function handleAddTodoItem(event) {
    event.preventDefault();

    if (todoTitle === '') {
      return;
    }

    setTodoList((prevState) => [
      ...prevState,
      {
        title: todoTitle,
        isCompleted: false,
        id: uuidv4()
      }
    ]);

    handleClearTitle();
  }

  function handleTitleChange(event) {
    setTodoTitle(event.target.value);
  }

  function handleClearTitle() {
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

  function handleCompletedStatus(todoId) {
    return () => {
      const newTodoList = todoList.map((item) => {
        if (item.id === todoId) {
          return {
            ...item,
            isCompleted: !item.isCompleted
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
        <TodoForm
          addTodoItem={handleAddTodoItem}
          handleClearTitle={handleClearTitle}
          handleTitleChange={handleTitleChange}
          todoTitle={todoTitle}
        />
      </Box>
      <TodoList todoList={todoList} deleteTodoItem={deleteTodoItem} changeIsCompleted={handleCompletedStatus} />
    </Container>
  );
}

export default App;
