# 01 Rendering Puzzles

This folder covers React rendering behavior that often surprises developers.

## Contents

### Puzzle01: Strict Mode Double Mount
- **Topic**: React StrictMode behavior
- **Key Concept**: In dev mode, React 18+ mounts, unmounts, then remounts components to help find side effect bugs
- **Why it matters**: Understanding this prevents treating it as a bug

### Puzzle02: State Updates & Batching
- **Topic**: Automatic batching in React 18
- **Key Concept**: Multiple setState calls in event handlers are batched into one render
- **Why it matters**: Knowing this prevents confusion about state update timing

## Key Takeaways

1. **StrictMode** is your friend - it surfaces bugs early
2. **Batching** improves performance - embrace it
3. **Functional updates** (`setCount(c => c + 1)`) always give the latest value

## Related Interview Questions

- "What is React StrictMode and why does it mount twice?"
- "How does React batching work in React 18?"
- "What is the difference between concurrent and batched updates?"
