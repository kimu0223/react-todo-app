import React, { useState } from 'react';
import StarRating from './StarRating';

function EditTodoModal({ todo, closeModal, updateTodo }) {
  const [comment, setComment] = useState(todo.comment);
  const [dueDate, setDueDate] = useState(todo.dueDate || '');
  const [priority, setPriority] = useState(todo.priority || 0);

  const handleSave = () => {
    updateTodo(todo.id, { comment, dueDate, priority });
    closeModal();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{todo.title} - 詳細編集</h3>
        <div className="modal-field">
          <label>期限</label>
          <input
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="modal-field">
          <label>重要度</label>
          <StarRating rating={priority} setRating={setPriority} />
        </div>
        <div className="modal-field">
          <label>コメント</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="詳細コメント..."
          ></textarea>
        </div>
        <div className="modal-actions">
          <button onClick={handleSave}>保存</button>
          <button onClick={closeModal}>キャンセル</button>
        </div>
      </div>
    </div>
  );
}

export default EditTodoModal;
