import React, { useState, useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image, rating }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const [isFavorited, setIsFavorited] = useState(false);
    const [quantity, setQuantity] = useState(cartItems[id] || 0); // Initialize with existing cart quantity

    const handleAddClick = () => {
        setQuantity(1);
        addToCart(id, name, price, image); // Add item to cart context
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        addToCart(id, name, price, image); // Update quantity in cart context
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            addToCart(id, name, price, image);
        } else {
            setQuantity(0);
            removeFromCart(id); // Remove item from cart if quantity reaches zero
        }
    };

    const renderStars = (rating) => {
        const filledStars = Array(Math.floor(rating)).fill(<img src={assets.star} alt="filled star" className="star" />);
        const emptyStars = Array(5 - Math.floor(rating)).fill(<img src={assets.star2} alt="empty star" className="star" />);
        return [...filledStars, ...emptyStars];
    };

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt={name} />
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p className='food-item-name'>{name}</p>
                    <img
                        src={isFavorited ? assets.favon : assets.favoff}
                        alt="favorite icon"
                        className="favorite-icon"
                        onClick={toggleFavorite}
                    />
                    <p className='food-item-rating'>{renderStars(rating)}</p>
                </div>
                <p className='food-item-desc'>{description}</p>
                <div className='add'>
                    <p className='food-item-price'>Rs.{price}</p>
                    {quantity === 0 ? (
                        <button onClick={handleAddClick} className="add-button">ADD</button>
                    ) : (
                        <div className="item-quantity-controls">
                            <button onClick={decreaseQuantity} className="quantity-button">-</button>
                            <span className="item-quantity">{quantity}</span>
                            <button onClick={increaseQuantity} className="quantity-button">+</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
