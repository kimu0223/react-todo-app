import React from 'react';
import StarRating from './StarRating';

function TodoItem({ todo, toggleComplete, deleteTodo, openModal }) {
  const formattedDate = todo.dueDate
    ? new Date(todo.dueDate).toLocaleString('ja-JP', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <div className="todo-content">
        <span>{todo.title}</span>
        <div className="todo-meta">
          {todo.dueDate && <div className="todo-due-date">期限: {formattedDate}</div>}
          {todo.priority > 0 && <StarRating rating={todo.priority} />}
        </div>
      </div>
      <div className="todo-actions">
        <button onClick={() => openModal(todo)}>詳細</button>
        <button onClick={() => deleteTodo(todo.id)}>削除</button>
      </div>
    </div>
  );
}

export default TodoItem;
