// src/components/TodoItem.js

import React from 'react';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  return (
    <div className={`flex items-center justify-between border p-4 my-2 ${todo.completed ? 'bg-gray-200' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-2"
        />
        <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.title}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => onEdit(todo.id)} className="text-blue-500">
        
          <EditIcon/>
        </button>
        <button onClick={() => onDelete(todo.id)} className="text-red-500">
          <DeleteForeverIcon  />
        </button>
        <span className={`text-sm ${todo.completed ? 'text-green-500' : 'text-gray-500'}`}>
          {todo.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
