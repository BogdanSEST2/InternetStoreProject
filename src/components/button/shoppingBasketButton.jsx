import basketIcon from '../../components/img/pictures/shopping-basket.png';
import rightArrow from '../../components/img/pictures/right-arrow.png';
import { useCart } from '../../context/CartContext';



export default function ShoppingBasketButton({functionAfterClick}) {
    const {cart} = useCart();
    return <button className={`shopping-basket-button`} onClick={functionAfterClick}>
        <img id='img-1' src={basketIcon} alt="basket picture" width={20}/>
        <img id='img-2' src={rightArrow} alt="right arrow picture" width={20}/>
        {cart.length > 0 ? <span className="quantity-of-selected-items">{cart.map((item) => item.quantity).reduce((start, item) => start + item)}</span> : null}
    </button>
}

