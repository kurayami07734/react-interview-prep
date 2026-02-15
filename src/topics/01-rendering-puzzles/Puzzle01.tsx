import { useState, useEffect } from 'react';

export default function Puzzle01() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect running - count is:', count);
  });

  return (
    <div className="puzzle-section">
      <h2>Puzzle 01: Strict Mode Double Mount</h2>
      <p>In React Strict Mode, useEffect runs twice in dev mode. Watch the console!</p>
      
      <div className="counter-box">
        <div className="count">{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
      
      <h3>Question:</h3>
      <p>Why does the effect log twice on mount?</p>
      
      <h3>Answer:</h3>
      <p>In React 18's Strict Mode (dev only), components mount, unmount, and remount to help find side effect bugs. This simulates what happens in a production environment if component initialization is not idempotent.</p>
    </div>
  );
}
