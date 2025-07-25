import React from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

function TodoList({ todos, addTodo, toggleComplete, deleteTodo, openModal }) {
  return (
    <div className="todo-list-container">
      <h2>ToDoリスト</h2>
      <AddTodoForm addTodo={addTodo} />
      <div className="todo-items">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            openModal={openModal}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
