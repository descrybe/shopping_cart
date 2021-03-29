export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};

// const productUrl = 'https://fakestoreapi.herokuapp.com/';
const productUrl = 'https://fakestoreapi.com/products';

export const getProducts = async (): Promise<CartItemType[]> => {
    return await (await fetch(productUrl)).json();
};