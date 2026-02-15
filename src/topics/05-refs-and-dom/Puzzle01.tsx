import { useRef, useImperativeHandle, forwardRef, useState } from 'react';

type InputHandle = {
  focus: () => void;
  getValue: () => string;
};

const FancyInput = forwardRef<InputHandle>(function FancyInput(_props, ref) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    getValue: () => inputRef.current?.value || '',
  }));

  return (
    <input 
      ref={inputRef} 
      className="input"
      placeholder="Fancy input..."
    />
  );
});

export default function Puzzle01() {
  const inputRef = useRef<InputHandle>(null);
  const [value, setValue] = useState('');

  return (
    <div className="puzzle-section">
      <h2>Puzzle 01: forwardRef + useImperativeHandle</h2>
      <p>Parent can directly call child methods without exposing the DOM!</p>
      
      <FancyInput ref={inputRef} />
      
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
        <button onClick={() => setValue(inputRef.current?.getValue() || '')}>Get Value</button>
      </div>
      
      {value && <p>Captured value: {value}</p>}
      
      <h3>Why useRef + useImperativeHandle?</h3>
      <ul style={{ marginLeft: '20px' }}>
        <li>Expose specific methods, not entire DOM</li>
        <li>Useful for focus(), scrollIntoView(), etc.</li>
        <li>Maintains encapsulation</li>
      </ul>
      
      <h3>Pattern:</h3>
      <pre>{`const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));
  
  return <input ref={inputRef} />;
});`}</pre>
    </div>
  );
}
