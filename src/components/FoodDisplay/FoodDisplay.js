import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { assets } from '../../assets/assets';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);


    // Filter food items based on selected category
    const filteredFoodList = category === "All"
        ? food_list
        : food_list.filter(item => item.food_category === category);

    return (
        <div className='food-display' id='food-display'>
            <h2>Must-Try Local Favorites</h2>
             
              {/* Display message if no items match the selected category */}
            {filteredFoodList.length === 0 && (
                <div className="no-items-message">
                  <img src={assets.we} alt="Not available" className="no-items-image" />
                    <p>Not available right now</p>
                </div>
            )}

            <div className='food-display-list'>
                {filteredFoodList.map((item, index) => (
                    <FoodItem 
                        key={index} 
                        rating={item.food_rating} 
                        id={item.food_id} 
                        name={item.food_name} 
                        description={item.food_desc} 
                        price={item.food_price} 
                        image={item.food_image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default FoodDisplay;
