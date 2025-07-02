import React, { useState, useCallback } from 'react';

function CallbackDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default CallbackDemo;
