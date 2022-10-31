import React, { useCallback, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import './App.css';

import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const initialTodoList = [];

function App() {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [todoTitle, setTodoTitle] = useState('');

  const handleClearTitle = useCallback(() => {
    setTodoTitle('');
  }, []);

  const handleAddTodoItem = useCallback(
    (event) => {
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
    },
    [handleClearTitle, todoTitle]
  );

  const handleTitleChange = useCallback((event) => {
    setTodoTitle(event.target.value);
  }, []);

  const deleteTodoItem = useCallback(
    (todoId) => {
      return () => {
        const filteredTodoList = todoList.filter((item) => {
          return item.id !== todoId;
        });

        setTodoList(filteredTodoList);
      };
    },
    [todoList]
  );

  const handleCompletedStatus = useCallback(
    (todoId) => {
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
    },
    [todoList]
  );

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
