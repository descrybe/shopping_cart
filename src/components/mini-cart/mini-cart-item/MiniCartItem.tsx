import React from 'react';
import Button from '@material-ui/core/Button';
import { CartItemType } from '../../../service/serviceAPI';
import { MiniCartItemWrapper } from './MiniCartItem.styles';

type MiniCartItemProps = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const MiniCartItem: React.FC<MiniCartItemProps> = ({ item, addToCart, removeFromCart }) => {
    return (
        <MiniCartItemWrapper>
            <img src={item.image} alt={item.title}/>
            <div className='product-info'>
                <h3>{item.title}</h3>
                <div className='product-information'>
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button 
                        size='small' 
                        disableElevation 
                        variant='contained' 
                        onClick={() => removeFromCart(item.id)}>-</Button>
                    <p>{item.amount}</p>
                    <Button 
                        size='small'
                        disableElevation 
                        variant='contained' 
                        onClick={() => addToCart(item)}>+</Button>
                </div>                
            </div>
        </MiniCartItemWrapper>
    );
};

export default MiniCartItem;