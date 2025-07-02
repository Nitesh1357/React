import React, { useState, useMemo } from 'react';

function ExpensiveCounter() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log('Calculating...');
    return count * 1000;
  }, [count]);

  return (
    <>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

export default ExpensiveCounter;
