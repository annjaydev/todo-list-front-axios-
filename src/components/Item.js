import React, { useState } from 'react';
import './Item.css';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/EditOutlined';
import DoneIcon from '@material-ui/icons/DoneOutline';

export const Item = (props) => {
  const {id, text, isCheck, onChange, editId, onEdit, onDelete} = props;

  const [inputText, setInputText] = useState(text);

  return (
    <div className='task-box'>
      <div className='task-content'>

        {
          id === editId
            ? <input
              className='task-edit-input'
              type='text'
              value={inputText}
              onChange={
                (e) => setInputText(e.target.value)
              }
            />
            : <>
              <input
                className='task-checkbox'
                type='checkbox'
                checked={isCheck}
                value={isCheck}
                onChange={() => onChange(id, text, !isCheck)}
              />
              <span
                className={isCheck ? 'task-box-text task-box-text--done' : 'task-box-text'}
              >
                {text}
              </span>
            </>
        }
      </div>

      <div className='task-control'>
        {
          id === editId
            ? <DoneIcon
              className='task-done-icon'
              onClick={() => {
                if (inputText) {
                  onChange(id, inputText, isCheck)
                }
              }} />
            : <EditIcon className='task-edit-icon' onClick={() => onEdit(id)} />
        }

        <DeleteIcon className='task-delete' onClick={() => onDelete(id)} />
      </div>
    </div>
  );
}
