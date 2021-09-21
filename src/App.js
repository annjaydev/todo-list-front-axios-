import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Header } from './components/Header';
import { AddItem } from './components/AddItem';
import { Item } from './components/Item';

export const App = () => {
  const baseURL = 'http://localhost:8000/';

  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState('');

  useEffect( async () => {
    const result = await axios.get(`${baseURL}allTasks`);
    setTasks(result.data);
  });

  const addItem = async(text) => {
    const item = {
      text,
      isCheck: false
    };

    const result = await axios.post(`${baseURL}createTask`, item);
    
    setTasks(result.data);
  }

  const updateItem = async (id, text, isCheck) => {
    const editedItem = {
      id,
      text,
      isCheck
    };

    const result = await axios.patch(`${baseURL}updateTask`, editedItem);

    setTasks(result.data);
    setEditId('');
  }

  const editItem = (id) => {
    setEditId(id);
  }

  const deleteItem = async (id) => {
    const result = await axios.delete(`${baseURL}deleteTask?id=${id}`);
    setTasks(result.data);
  }

  return (
    <>
      <Header title='Todo-List App' />
      <AddItem onAdd={addItem} />
      {
        tasks.map( (task) =>  {
          const props = {
            key: task.id,
            id: task.id,
            text: task.text,
            isCheck: task.isCheck,
            editId,
            onChange: updateItem,
            onEdit: editItem,
            onDelete: deleteItem
          }

          return <Item {...props}/>;
        })        
      }
    </>
  );
}
