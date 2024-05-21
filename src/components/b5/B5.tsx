import React, { useState, useCallback } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = useCallback((newTodo: string) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value.trim() !== '') {
      handleAddTodo(event.currentTarget.value.trim());
      event.currentTarget.value = '';
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new todo"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default TodoList;
