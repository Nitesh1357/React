import React from 'react';
import Counter from './Hooks/components/Counter';
import Timer from './Hooks/components/Timer';
import UserContextExample from './Hooks/components/UserContextExample';
import InputFocus from './Hooks/components/InputFocus';
import ExpensiveCounter from './Hooks/components/ExpensiveCounter';
import CallbackDemo from './Hooks/components/CallbackDemo';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Hooks Examples</h1>

      <h2>useState</h2>
      <Counter />

      <h2>useEffect</h2>
      <Timer />

      <h2>useContext</h2>
      <UserContextExample />

      <h2>useRef</h2>
      <InputFocus />

      <h2>useMemo</h2>
      <ExpensiveCounter />

      <h2>useCallback</h2>
      <CallbackDemo />
    </div>
  );
}

export default App;
