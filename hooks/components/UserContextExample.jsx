import React, { useContext, createContext } from 'react';

const UserContext = createContext();

function Child() {
  const user = useContext(UserContext);
  return <p>Hello, {user}!</p>;
}

function UserContextExample() {
  return (
    <UserContext.Provider value="Nitesh">
      <Child />
    </UserContext.Provider>
  );
}

export default UserContextExample;
