import React, { useState } from 'react';
import { useQuery } from 'react-query';
//Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MiniCart from '../mini-cart/MiniCart';
//
import ProductTile from '../product-tile/ProductTile';
//Styles
import { Wrapper, StyledButton } from './App.styles';
//Api
import { getProducts, CartItemType } from '../../service/serviceAPI';

const App: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  const getTotalItems = (items: CartItemType[]): number => {
    return items.reduce((acc: number, item) => acc + item.amount, 0);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemExistInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemExistInCart) {
        return prev.map(item => (
          item.id === clickedItem.id 
            ? { ...item, amount: item.amount + 1 } 
            : item
        ))
      }

      return [...prev, { ...clickedItem, amount: 1 }]
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => {
      return prev.reduce((acc, item) => {
        if (item.id === id) {
          return item.amount === 1 
            ? acc 
            : [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    });
  };
  
  if (isLoading) <LinearProgress />
  if (error) return <div>Something went wrong ...</div>

  return (
    <div className="App">
      <Wrapper>
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)} >
          <MiniCart 
            cartItems={cartItems} 
            addToCart={handleAddToCart} 
            removeFromCart={handleRemoveFromCart} 
            setCartOpen={() => setCartOpen(false)}/>
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge color='error' badgeContent={getTotalItems(cartItems)}>
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
        <Grid container spacing={3}>
          {data && data.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <ProductTile item={item} handleAddToCart={handleAddToCart}/>
            </Grid>)
          )}
        </Grid>
      </Wrapper>
    </div>
  );
};

export default App;
