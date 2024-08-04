// import React from 'react'
//  import Pizza from '../assets/pizzaa.jpg'
//  import Burger from '../assets/burgers.jpg'
//  import Momo from '../assets/momos.jpg'


// function Explorefood() {
//       const foods = [
//     {
//       name: 'Pizza',
//       img: {Pizza }
//     },
//     {
//       name: 'Burger',
//       img: {Burger}
//     },
//     {
//       name: 'Momo',
//       img: {Momo}
//     }
//   ];

//   return (
//     <div className="explorefood">
//       <h2>Explore Foods</h2>
//       <div className="food-cards">
//         {foods.map((food, index) => (
//           <div key={index} className="food-card">
//             <img src={food.img} alt={food.name} />
//             <h3>{food.name}</h3>
//           </div>
//         ))}
//       </div>
//       </div>
//   )
// }
   
   
// export default Explorefood
import React from 'react';
import Pizza from '../assets/pizzaa.jpg';
import Burger from '../assets/burgerr.jpg'
import Momo from '../assets/momos.jpg';

function Explorefood() {
  const foods = [
    {
      name: 'Pizza',
      img: Pizza 
    },
    {
      name: 'Burger',
      img: Burger 
    },
    {
      name: 'Momo',
      img: Momo 
    }
  ];

  return (
    <div className="explorefood">
      <h2>Explore Foods</h2>
      <div className="food-cards">
        {foods.map((food, index) => (
          <div key={index} className="food-card">
            <img src={food.img} alt={food.name} />
            <h3>{food.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explorefood;