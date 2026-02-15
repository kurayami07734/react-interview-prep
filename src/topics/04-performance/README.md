# 04 Performance

Optimization techniques in React.

## Contents

### Puzzle01: Unnecessary Re-renders
- **Topic**: Why components re-render
- **Key Concept**: New function/array references = re-render
- **Problem**: Parent updates cause all children to re-render

### Puzzle02: useCallback & useMemo
- **Topic**: Memoization in React
- **Key Concept**: Stable references prevent re-renders
- **Solution**: React.memo, useCallback, useMemo

## Key Takeaways

1. Don't optimize prematurely - measure first
2. React.memo compares props by reference
3. useCallback keeps function identity, useMemo keeps computed values

## Related Interview Questions

- "When should you use useMemo/useCallback?"
- "What is React.memo and how does it work?"
- "What is referential equality in React?"
- "What is the difference between shallow and deep comparison?"
