import { useReducer } from 'react';

type State = { count: number };
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

export default function Puzzle01() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="puzzle-section">
      <h2>Puzzle 01: useReducer Basic</h2>
      <p>useReducer is useful for complex state logic - see the action dispatch below.</p>
      
      <div className="counter-box">
        <div className="count">{state.count}</div>
        <div>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
      </div>
      
      <h3>Why useReducer?</h3>
      <ul style={{ marginLeft: '20px' }}>
        <li>Complex state with multiple sub-values</li>
        <li>When next state depends on previous</li>
        <li>Can pass dispatch down as props (no callbacks)</li>
      </ul>
      
      <h3>Pattern:</h3>
      <pre>{`const [state, dispatch] = useReducer(reducer, initialState);
// dispatch({ type: 'increment' })`}</pre>
    </div>
  );
}
