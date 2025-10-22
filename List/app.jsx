dhimport List from './condition rendering/List';
import './App.css'; // Assuming you have some styles in App.css
import './index.css'; // Assuming you have some global styles in index.css
import React from 'react';

function App() {
  const fruits = [
    { id: 1, name: 'Apple', calorie: 52 },
    { id: 2, name: 'Banana', calorie: 89 },
    { id: 3, name: 'Cherry', calorie: 50 },
    { id: 4, name: 'Date', calorie: 282 },
    { id: 5, name: 'Elderberry', calorie: 73 },
    { id: 6, name: 'Fig', calorie: 74 },
    { id: 7, name: 'Grapes', calorie: 69 },
  ];

  const vegetables = [
    { id: 1, name: 'Gourd', calorie: 52 },
    { id: 2, name: 'Brinjal', calorie: 89 },
    { id: 3, name: 'Potatoes', calorie: 50 },
    { id: 4, name: 'Tomatoes', calorie: 282 },
    { id: 5, name: 'Ladyfinger', calorie: 73 },
    { id: 6, name: 'Pumpkin', calorie: 74 },
    { id: 7, name: 'Ginger', calorie: 69 },
  ];

  return (
    <>
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
    </>
  );
}

export default App;
