 import React, { useState } from 'react';

function Greeting() {
  const [status, setStatus] = useState('guest'); // 'guest', 'user', or 'admin'

  let message;
  if (status === 'admin') {
    message = 'Welcome, Admin!';
  } else if (status === 'user') {
    message = 'Welcome back, User!';
  } else {
    message = 'Hello, Guest. Please log in.';
  }

  return (
    <div>
      <h1>{message}</h1>

      <button onClick={() => setStatus('guest')}>Guest</button>
      <button onClick={() => setStatus('user')}>User</button>
      <button onClick={() => setStatus('admin')}>Admin</button>
    </div>
  );
}

export default Greeting;
