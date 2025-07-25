import React, { useState } from 'react';
import StarRating from './StarRating';

function AddTodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo({ title, dueDate, priority });
    setTitle('');
    setDueDate('');
    setPriority(0);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-main-inputs">
        <input
          type="text"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="新しいToDoを追加"
        />
        <button type="submit">追加</button>
      </div>
      <div className="form-meta-inputs">
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <StarRating rating={priority} setRating={setPriority} />
      </div>
    </form>
  );
}

export default AddTodoForm;
