import React, { useState } from 'react';
import './AddItem.css';

export const AddItem = ({ onAdd }) => {
  const [text, setText] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (text) {
      onAdd(text);
      setText('');
    }
  }

  return (
    <form 
      className='todo-form'
      onSubmit={ (e) => onFormSubmit(e)}
    >
      <input 
        className='todo-input' 
        type="text" 
        value={text}
        onChange={ (e) => setText((text) => text = e.target.value)}
      />
      <button className='todo-add-btn'>Add Task</button>
    </form>
  );
}