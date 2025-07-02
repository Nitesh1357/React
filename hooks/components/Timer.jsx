import React, { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick");
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return <p>Check the console for ticks.</p>;
}

export default Timer;
