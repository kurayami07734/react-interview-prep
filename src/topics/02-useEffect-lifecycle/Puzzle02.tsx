import { useState, useEffect } from 'react';

export default function Puzzle02() {
  const [data, setData] = useState<string | null>(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('Fetching data with filter:', filter);
    const fetchData = async () => {
      const result = await new Promise<string>(resolve => 
        setTimeout(() => resolve(`Data for: ${filter}`), 500)
      );
      setData(result);
    };
    fetchData();
  }, [filter]);

  return (
    <div className="puzzle-section">
      <h2>Puzzle 02: Race Condition in useEffect</h2>
      <p>Type quickly in the input and observe - older requests may overwrite newer ones!</p>
      
      <input 
        className="input"
        type="text" 
        value={filter} 
        onChange={e => setFilter(e.target.value)}
        placeholder="Type something..."
      />
      
      <div>
        <h3>Result: {data}</h3>
      </div>
      
      <h3>Question:</h3>
      <p>Why might the data shown be stale even though we have a dependency?</p>
      
      <h3>Answer:</h3>
      <p>This is a <strong>race condition</strong>. When you type quickly, older async operations may resolve after newer ones, causing stale data to overwrite fresh data. The "filter" updates synchronously, but the async fetch may resolve out of order.</p>
      
      <h3>Fix:</h3>
      <p>Use an abort controller or a cleanup flag to ignore stale responses:</p>
      <pre>{`useEffect(() => {
  let ignore = false;
  fetchData().then(() => {
    if (!ignore) setData(result);
  });
  return () => { ignore = true; };
}, [filter]);`}</pre>
    </div>
  );
}
