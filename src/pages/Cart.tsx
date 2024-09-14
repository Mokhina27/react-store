import { FC } from 'react';
import s from './Cart.module.scss';
import { useCartStore } from '../store/cartStore';
// import CustomBtn from '../components/UI/CustomBtn';
import Navbar from '../components/Navbar/Navbar';
import { deleteIcon } from '../utils/img';
import Checkout from '../components/Cart/Checkout';
import { Link } from 'react-router-dom';

const Cart: FC = () => {
    const { items, removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();

    return (
      <>
         <Navbar/>
        <div className={s.cart}>
          <div className={s.cart__links}>
          <Link to='/shop' className={s.cart__links_link}>Shop &gt;</Link>
            <p className={s.cart__links_text}>Cart</p>
          </div>
          <h2 className={s.cart__title}>Your cart</h2>
            <div className={s.cart__boxes}>
              {items.length === 0 ? (
                <p>Ваша корзина пуста.</p>
              ) : (
                <>
                    <div className={s.cart__items}>
                        {items.map(item => (
                            <div key={item.id} className={s.cart__item}>
                      
                                <Link to={`/product/${item.id}`}>
                                  <div className={s.cart__details}>
                                  <img src={item.thumbnail} alt={item.title} className={s.cart__img} />
                                        <div className={s.cart__details_info}>
                                          
                                          <h3 className={s.cart__item_title}>{item.title}</h3>
                                          <p className={s.cart__item_price}>Price: ${item.price}</p>
                                          <p className={s.cart__item_category}>{item.category}</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className={s.cart__informations}>
                                  <div className={s.cart__btns}>
                                    <div className={s.cart__delete}>
                                      <button onClick={() => removeFromCart(item.id)}>
                                        <img className={s.cart__delete_icon} src={deleteIcon} alt="" />
                                      </button>
                                    </div>
                                    <div className={s.cart__controls}>
                                        <button className={s.cart__controls_icon} onClick={() => decreaseQuantity(item.id)}>–</button>
                                        <p className={s.cart__controls_icon}>{item.quantity}</p>
                                        <button className={s.cart__controls_icon} onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={s.cart__summary}>
                        {/* <p>Общая стоимость: ${total.toFixed(2)}</p>
                        <CustomBtn 
                            text="Очистить корзину" 
                            onClick={handleClearCart} 
                        /> */}
                        <Checkout/>
                    </div>
                </>
            )}
            </div>
        </div>
      </>
    );
};

export default Cart;




