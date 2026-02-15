import { useState } from 'react';

type Todo = { id: number; text: string; completed: boolean };

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <div className="puzzle-section">
      <h2>Challenge 02: Todo List</h2>
      <p>Build a todo list with add, toggle, and delete functionality.</p>
      
      <div style={{ marginBottom: '15px' }}>
        <input 
          className="input"
          type="text" 
          value={input} 
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
          placeholder="Add a todo..."
        />
        <button onClick={addTodo} className="success">Add</button>
      </div>
      
      <p>Active: {activeCount} | Completed: {todos.length - activeCount}</p>
      
      <ul style={{ listStyle: 'none', marginTop: '15px' }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderBottom: '1px solid #eee' }}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="danger">Delete</button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && <p style={{ color: '#888' }}>No todos yet. Add one above!</p>}
      
      <h3>Requirements:</h3>
      <ul style={{ marginLeft: '20px' }}>
        <li>Add new todos with Enter key or button</li>
        <li>Toggle completion status</li>
        <li>Delete individual todos</li>
        <li>Show active/completed counts</li>
      </ul>
    </div>
  );
}
