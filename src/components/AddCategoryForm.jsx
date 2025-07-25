import React, { useState } from 'react';

function AddCategoryForm({ addCategory }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addCategory(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="category-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="新しいカテゴリ名"
      />
      <button type="submit">+</button>
    </form>
  );
}

export default AddCategoryForm;
