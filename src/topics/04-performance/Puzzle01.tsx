import { useState } from 'react';

function Child({ data, onClick }: { data: number; onClick: () => void }) {
  console.log('Child rendered');
  return (
    <div className="box">
      <p>Child received: {data}</p>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
}

export default function Puzzle01() {
  const [count, setCount] = useState(0);
  const [items] = useState([1, 2, 3]);

  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <div className="puzzle-section">
      <h2>Puzzle 01: Unnecessary Re-renders</h2>
      <p>Click "Increment" - watch how Child re-renders despite no prop changes!</p>
      
      <div className="counter-box">
        <div className="count">{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment Parent</button>
      </div>
      
      <Child data={items.length} onClick={handleClick} />
      
      <h3>Question:</h3>
      <p>Why does Child re-render when parent state changes?</p>
      
      <h3>Answer:</h3>
      <p>Every time Parent renders, a NEW function reference for <code>handleClick</code> is created. React compares by reference, sees it's different, and re-renders Child. The <code>data</code> prop also looks different because a new array is created each render.</p>
      
      <h3>Fix:</h3>
      <p>Wrap Child in <code>React.memo()</code> and use <code>useCallback</code> / <code>useMemo</code> for stable references.</p>
    </div>
  );
}
