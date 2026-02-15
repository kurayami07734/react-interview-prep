import { createContext, useContext, useReducer } from 'react';

type State = { count: number; theme: 'light' | 'dark' };
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'toggleTheme' };

const initialState: State = { count: 0, theme: 'light' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'toggleTheme':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}

const GlobalContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | null>(null);

function Child() {
  const { state, dispatch } = useContext(GlobalContext)!;
  return (
    <div className="card" style={{ background: state.theme === 'dark' ? '#333' : '#fff', color: state.theme === 'dark' ? '#fff' : '#333' }}>
      <h3>Child Component</h3>
      <p>Count: {state.count}</p>
      <p>Theme: {state.theme}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'toggleTheme' })}>Toggle Theme</button>
    </div>
  );
}

export default function Puzzle02() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="puzzle-section">
      <h2>Puzzle 02: useContext + useReducer</h2>
      <p>State lives in parent, dispatched from child via Context!</p>
      
      <GlobalContext.Provider value={{ state, dispatch }}>
        <div style={{ padding: '20px', background: state.theme === 'dark' ? '#222' : '#f9f9f9', borderRadius: '8px' }}>
          <h3>Parent - Count: {state.count}</h3>
          <Child />
        </div>
      </GlobalContext.Provider>
      
      <h3>Why useContext with useReducer?</h3>
      <ul style={{ marginLeft: '20px' }}>
        <li>Avoid prop drilling</li>
        <li>Global state management without Redux</li>
        <li>Actions dispatched from any component</li>
      </ul>
    </div>
  );
}
