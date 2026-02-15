import { useState, useEffect, useRef } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTime(t => t + 10);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => setIsRunning(!isRunning);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="puzzle-section">
      <h2>Challenge 01: Stopwatch</h2>
      <p>Build a functional stopwatch with start/stop and reset.</p>
      
      <div className="counter-box">
        <div className="count">{formatTime(time)}</div>
        <div>
          <button onClick={handleStartStop} className={isRunning ? 'danger' : 'success'}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      
      <h3>Requirements:</h3>
      <ul style={{ marginLeft: '20px' }}>
        <li>Start/Stop button toggles the timer</li>
        <li>Reset stops and clears to 00:00.00</li>
        <li>Display time in MM:SS.CC format</li>
        <li>Update every 10ms</li>
      </ul>
    </div>
  );
}
