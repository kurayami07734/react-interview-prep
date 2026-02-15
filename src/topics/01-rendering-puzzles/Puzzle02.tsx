import { useState } from 'react';

export default function Puzzle02() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<string[]>([]);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setItems([...items, `Item ${count}`]);
    setItems([...items, `Item ${count + 1}`]);
  };

  return (
    <div className="puzzle-section">
      <h2>Puzzle 02: State Updates & Batching</h2>
      <p>Click the button and observe what happens!</p>
      
      <div className="counter-box">
        <div className="count">{count}</div>
        <button onClick={handleClick}>Click me 3x</button>
      </div>
      
      <div>
        <h3>Items:</h3>
        {items.map((item, i) => <div key={i}>{item}</div>)}
      </div>
      
      <h3>Question:</h3>
      <p>Why does count only increment by 1 despite 3 setCount calls?</p>
      
      <h3>Answer:</h3>
      <p>React batches state updates within event handlers. All three <code>setCount(count + 1)</code> use the same <code>count</code> value from the render closure. React doesn't re-render after each call - it collects all updates and renders once with the final state.</p>
      
      <h3>Fix:</h3>
      <p>Use the functional update form: <code>setCount(c =&gt; c + 1)</code> three times</p>
    </div>
  );
}
