

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onEdit, onDelete, onToggle, showCompleted }) => {
  return (
    <div>
      {todos.map(todo => (
        (showCompleted || !todo.completed) && (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        )
      ))}
    </div>
  );
};

export default TodoList;
