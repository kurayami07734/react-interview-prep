# 02 useEffect Lifecycle

This folder explores common useEffect pitfalls and patterns.

## Contents

### Puzzle01: Stale Closure in useEffect
- **Topic**: Closure captured in useEffect
- **Key Concept**: Effect closure captures variable values at render time
- **Fix**: Use functional updates or refs

### Puzzle02: Race Condition
- **Topic**: Async operations in useEffect
- **Key Concept**: Multiple async calls can resolve out of order
- **Fix**: Cleanup with abort flag or AbortController

## Key Takeaways

1. Always consider what values your effect closure captures
2. Use ESLint's exhaustive-deps rule (but understand when to suppress)
3. Clean up async operations to prevent memory leaks

## Related Interview Questions

- "What is the stale closure problem in useEffect?"
- "How would you fix a useEffect that has missing dependencies?"
- "How do you handle race conditions in useEffect?"
