import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt="item" />
        <div className='item-details'>
            <span className=''>{name}</span>
            <span className=''>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem;