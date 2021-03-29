import Button from '@material-ui/core/Button';
import { TileWrapper } from './ProductTile.styles';
import { CartItemType } from '../../service/serviceAPI';

type TileProps = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void
};

const ProductTile: React.FC<TileProps> = ({ item, handleAddToCart }) => (
    <TileWrapper>
        <img src={item.image} alt={item.title}/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <button onClick={() => handleAddToCart(item)}>Add to cart</button>
    </TileWrapper>
);

export default ProductTile;