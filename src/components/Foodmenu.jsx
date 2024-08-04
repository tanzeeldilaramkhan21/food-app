import React from 'react'
import Chickenpizza from '../assets/chickenpizza.jpg'
import Cheezyburger from '../assets/cheezyburger.jpg'
import Burgerandfries from '../assets/burgerandfries.jpg'
import Vegetablepizza from '../assets/vegetablepizza.jpg'
import Vegmomo from '../assets/vegetablemomo.jpg'
import Steammomo from '../assets/steammomo.jpg'
function FoodMenu() {

  const foodItems = [
    {
      name: 'Chicken Pizza',
      price: '$5.3',
      description: 'Made with Italian Sauce, Chicken, and organic vegetables.',
      img: Chickenpizza
    },
    {
      name: 'Cheezy Burger',
      price: '$2.3',
      description: 'Made with Italian Sauce, Chicken, and organic vegetables.',
      img: Cheezyburger
    },
    {
      name: 'Chicken Steam Momo',
      price: '$3.3',
      description: 'Made with Italian Sauce, Chicken, and organic vegetables.',
      img: Steammomo
    },

     {
      name: 'Burger and Fries',
       price: '$3.3',
       description: 'Made with Italian Sauce, Chicken, and organic vegetables.',
       img: Burgerandfries
     },
    
    {
      name: 'Veg Momo',
      price: '$2',
      description: 'Made with Italian Sauce, and organic vegetables.',
      img: Vegmomo
    },
   
     {
      name: 'Vegetable Pizza',
      price: '$4.3',
      description: 'Made with Italian Sauce,  and organic vegetables.',
      img: Vegetablepizza
    },
   
  ];

  return (
    <div className="food-menu">
      <h2>Food Menu</h2>
      <div className="menu-items">
        {foodItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.img} alt={item.name} />
            <div className="menu-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="menu-bottom">
                <span className="price">{item.price}</span>
                <button>Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4>See All Foods</h4>
    </div>
   
  );
};

export default FoodMenu
