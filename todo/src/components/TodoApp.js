import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  const addTodo = () => {
    if (newTask.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        title: newTask,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setNewTask('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id) => {
    setEditTodoId(id);
    const todoToEdit = todos.find(todo => todo.id === id);
    setNewTask(todoToEdit.title);
  };

  const updateTodo = () => {
    if (newTask.trim() !== '') {
      setTodos(todos.map(todo =>
        todo.id === editTodoId ? { ...todo, title: newTask } : todo
      ));
      setEditTodoId(null);
      setNewTask('');
    }
  };

  const filteredTodos = showCompleted ? todos.filter(todo => todo.completed) : todos;

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 mr-2"
        />
        {editTodoId === null ? (
          <button onClick={addTodo} className="bg-blue-500 text-white p-2">Add</button>
        ) : (
          <button onClick={updateTodo} className="bg-green-500 text-white p-2">Update</button>
        )}
      </div>
      <div className="mb-4">
      
        <button onClick={() => setShowCompleted(!showCompleted)} className="ml-2 bg-gray-300 text-gray-700 p-2">
          {showCompleted ? 'Show All Todo' : 'Show Completed'}
        </button>
      </div>
      <TodoList
        todos={filteredTodos}
        onEdit={editTodo}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        showCompleted={showCompleted}
      />
    </div>
  );
};

export default TodoApp;
