import { useState, useEffect } from 'react';

export default function Puzzle01() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval tick, count:', count);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="puzzle-section">
      <h2>Puzzle 01: Stale Closure in useEffect</h2>
      <p>Click increment and watch the console - the interval always shows 0!</p>
      
      <div className="counter-box">
        <div className="count">{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
      
      <h3>Question:</h3>
      <p>Why does the interval always log "count: 0" even after incrementing?</p>
      
      <h3>Answer:</h3>
      <p>This is the classic <strong>stale closure</strong> problem. The <code>useEffect</code> runs once on mount with <code>count = 0</code>. The interval closure captures this initial value. Adding <code>count</code> to the dependency array would fix it but cause the interval to reset on every render.</p>
      
      <h3>Fix:</h3>
      <p>Use functional form: <code>setCount(c =&gt; c + 1)</code> or use a ref to hold the latest value.</p>
    </div>
  );
}
