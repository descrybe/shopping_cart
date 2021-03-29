import React from 'react';
import { CartWrapper } from './MiniCart.styles';
import { CartItemType } from '../../service/serviceAPI';
import MiniCartItem from '../mini-cart/mini-cart-item/MiniCartItem';

type CartProps = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    setCartOpen: () => void;
};

const MiniCart: React.FC<CartProps> = ({ cartItems, addToCart, removeFromCart, setCartOpen }) => {
    const calculateTotal = (items: CartItemType[]) => {
        return items.reduce((acc: number, item) => acc + item.amount * item.price, 0);
    };

    return (
        <CartWrapper>
            <h2>User cart</h2>
            <span className='close-button' onClick={setCartOpen}>X</span>
            { cartItems.length === 0 ? <p>No items in cart.</p> : null }
            { cartItems.map(item => ( 
                <MiniCartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}/> 
            )) }
            <div>Total amount: {calculateTotal(cartItems)}</div>
        </CartWrapper>
    );
};

export default MiniCart;
