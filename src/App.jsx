import React, { useState, useEffect } from 'react';
import Category from './components/Category';
import TodoList from './components/TodoList';
import EditTodoModal from './components/EditTodoModal';
import './App.css';

// サンプルの初期データ
const initialData = [
  {
    id: 1,
    name: '仕事',
    todos: [
      { id: 1, title: 'ドキュメント作成', completed: false, comment: '締め切りは来週月曜日', dueDate: '2025-07-30T18:00', priority: 4 },
      { id: 2, title: 'チームミーティング', completed: true, comment: '', dueDate: '2025-07-25T10:00', priority: 5 },
    ],
  },
  {
    id: 2,
    name: 'プライベート',
    todos: [
      { id: 3, title: '買い物', completed: false, comment: '牛乳、卵、パン', dueDate: '', priority: 2 },
      { id: 4, title: 'ジムに行く', completed: false, comment: '胸のトレーニング', dueDate: '2025-07-24T19:00', priority: 3 },
    ],
  },
];

function App() {
  const [categories, setCategories] = useState(initialData);
  const [activeCategory, setActiveCategory] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addCategory = (name) => {
    const newCategory = {
      id: Date.now(),
      name,
      todos: [],
    };
    setCategories([...categories, newCategory]);
  };

  const addTodo = ({ title, dueDate, priority }) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
      comment: '',
      dueDate,
      priority,
    };
    const updatedCategories = categories.map((category) => {
      if (category.id === activeCategory) {
        return { ...category, todos: [...category.todos, newTodo] };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const toggleComplete = (todoId) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === activeCategory) {
        const updatedTodos = category.todos.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        return { ...category, todos: updatedTodos };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const deleteTodo = (todoId) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === activeCategory) {
        const updatedTodos = category.todos.filter((todo) => todo.id !== todoId);
        return { ...category, todos: updatedTodos };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const updateTodo = (todoId, updatedData) => {
    const updatedCategories = categories.map((category) => {
      const updatedTodos = category.todos.map((todo) =>
        todo.id === todoId ? { ...todo, ...updatedData } : todo
      );
      return { ...category, todos: updatedTodos };
    });
    setCategories(updatedCategories);
  };


  const openModal = (todo) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTodo(null);
  };

  const activeTodos = categories.find((c) => c.id === activeCategory)?.todos || [];

  return (
    <div className="app-container">
      <Category
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        addCategory={addCategory}
      />
      <TodoList
        todos={activeTodos}
        addTodo={addTodo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        openModal={openModal}
      />
      {isModalOpen && selectedTodo && (
        <EditTodoModal
          todo={selectedTodo}
          closeModal={closeModal}
          updateTodo={updateTodo}
        />
      )}
    </div>
  );
}

export default App;
