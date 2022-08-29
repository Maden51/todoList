import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import List from './components/List';
import Popup from './components/Popup';

function App() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  return (
    <div className="todo__Wrapper">
      <Button 
        className="todo_addButton" 
        title="Добавить задачу" 
        onClick={() => setOpen(true)}
      />
      <h1 className="todo_title">TODO_LIST</h1>
      <List items={items} />
      {open ? <Popup onClick={() => setOpen(false)} /> : null} 
    </div>
  );
}

export default App;
