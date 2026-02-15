import { useState, useCallback, useMemo, memo } from 'react';

const Child = memo(function Child({ data, onClick }: { data: number; onClick: () => void }) {
  console.log('Child rendered');
  return (
    <div className="box">
      <p>Child received: {data}</p>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
});

export default function Puzzle02() {
  const [count, setCount] = useState(0);
  const [items] = useState([1, 2, 3]);

  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  const memoizedData = useMemo(() => items.length, [items]);

  return (
    <div className="puzzle-section">
      <h2>Puzzle 02: Fixing Re-renders with useCallback</h2>
      <p>Click "Increment" - Child no longer re-renders!</p>
      
      <div className="counter-box">
        <div className="count">{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment Parent</button>
      </div>
      
      <Child data={memoizedData} onClick={handleClick} />
      
      <h3>useCallback:</h3>
      <pre>{`const handleClick = useCallback(() => {
  console.log('Clicked');
}, []); // Empty deps = stable reference forever`}</pre>
      
      <h3>useMemo:</h3>
      <pre>{`const memoizedData = useMemo(() => items.length, [items]);`}</pre>
      
      <h3>React.memo:</h3>
      <pre>{`const Child = memo(function Child(props) {
  // Only re-renders if props actually change
});`}</pre>
    </div>
  );
}
