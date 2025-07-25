import React from 'react';
import AddCategoryForm from './AddCategoryForm';

function Category({ categories, activeCategory, setActiveCategory, addCategory }) {
  return (
    <div className="category-sidebar">
      <h2>カテゴリ</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className={category.id === activeCategory ? 'active' : ''}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <AddCategoryForm addCategory={addCategory} />
    </div>
  );
}

export default Category;
