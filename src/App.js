import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const initialTodoList = [];

function App() {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [todoTitle, setTodoTitle] = useState('');

  function addTodoItem(event) {
    event.preventDefault();

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

  return (
    <div className="App">
      <form onSubmit={addTodoItem}>
        <input type="text" onChange={onTitleChange} value={todoTitle}/>
        <button type="submit">add</button>
      </form>
      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>{item.title}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
