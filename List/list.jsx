// in this have 2 mthd
import React from 'react';

function List(props) {
  const { category, items } = props;

  const listItems = items.map(item => (
    <li key={item.id}>
      {item.name}: <b>{item.calorie}</b> calories
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

export default List;

// second method
// function List(){
//     const fruits=[
//         {id: 1, name: 'Aplpe', calorie : 52},
//         {id: 2 , name: 'Banana' , calorie : 89},
//         {id: 3, name: 'Cherry'  , calorie : 50},
//         {id: 4, name: 'Date'    , calorie : 282},
//         {id: 5, name: 'Elderberry' , calorie : 73},
//         {id: 6, name: 'Fig' , calorie : 74},
//         {id: 7, name: 'Grape' , calorie : 69},
//     ];
//      const vegetables=[
//         {id: 1, name: 'Guard', calorie : 52},
//         {id: 2 , name: 'Brinjal' , calorie : 89},
//         {id: 3, name: 'patotoes'  , calorie : 50},
//         {id: 4, name: 'tomatoes'    , calorie : 282},
//         {id: 5, name: 'Ladyfingerf' , calorie : 73},
//         {id: 6, name: 'pumpkin' , calorie : 74},
//         {id: 7, name: 'Ginger' , calorie : 69},
//     ];
//     // const lowCalFruits = fruits.filter(fruit => fruit.calorie < 100);
//     // const listItems = lowCalFruits.map(lowCalFruit => 
//     //     <li key={lowCalFruit.id}>
//     //         {lowCalFruit.name}: &nbsp;
//     //         <b>{lowCalFruit.calorie} calories</b>
//     //     </li>
//     // );
//     // const listItems = fruits.map(fruit => 
//     //     <li key={fruit.id}>
//     //         {fruit.name}: &nbsp;
//     //         <b>{fruit.calorie} calories</b>
//     //     </li>
//     // );
//     return( <>
//         <List items = {fruits} category= "fruits"/> 
//         <List items = {vegetables} category= "vegetables"/> 
       
//     </>
//     );
    
// }
// export default List;
