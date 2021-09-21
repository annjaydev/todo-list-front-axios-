import React from 'react';
import './Header.css';

export const Header = ({ title }) => {
  return (
    <header className='todo-header'>
      <h1 className='todo-title'>{title}</h1>
    </header>
  );
}
