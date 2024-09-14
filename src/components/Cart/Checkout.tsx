import { FC } from 'react'
import s from './Cart.module.scss'
import { useCartStore } from '../../store/cartStore'
import { appleIcon, arrowIcon, googleIcon, masterIcon, ppIcon, promocodeIcon, visaIcon } from '../../utils/img'

const Checkout:FC = () => {

  const { items } = useCartStore()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function calculateTotalWithDiscountAndShipping(total: number): number {
    const discount = total * 0.35; 
    const discountedTotal = total - discount; 
    const shippingCost = 10; 
    const finalTotal = discountedTotal + shippingCost; 
  
    return finalTotal;
  }
  
  const totalBeforeDiscount = total; 
  const finalAmount = calculateTotalWithDiscountAndShipping(totalBeforeDiscount);
  const roundedPrice = finalAmount.toFixed(2)
  const deliveryFee = 10;
  const disc = total * 0.35
  const discfee = total - disc
  const discountFee = discfee.toFixed(2)
  
  return (
    <>
        <div className={s.checkout}>
            <h2 className={s.checkout__title}>Order summary</h2>
            <div className={s.checkout__box}>
              <div className={s.checkout__box_info}>
                <p className={s.checkout__box_text}>Subtotal</p>
                <span className={s.checkout__box_span}>${total}</span>
              </div>
              <div className={s.checkout__box_info}>
                <p className={s.checkout__box_text}>Discount (-35%)</p>
                <span className={s.checkout__box_span_disc}>-${discountFee}</span>
              </div>
              <div className={s.checkout__box_info}>
                <p className={s.checkout__box_text}>Delivery fee</p>
                <span className={s.checkout__box_span}>${deliveryFee}</span>
              </div>
            </div>
            <div className={s.checkout__total}>
              <h2 className={s.checkout__total_price}>Total:</h2>
              <span className={s.checkout__total_span}>${roundedPrice}
              </span>
            </div>
            <div className={s.checkout__btn}>
              <div className={s.checkout__input}>
                <input 
                  type="text" 
                  className={s.checkout__btn_input} 
                  placeholder='Add promo code'
                />
                <img src={promocodeIcon} alt="" className={s.checkout__input_icon} />
              </div>
              <button className={s.checkout__btn_apply}>Apply</button>

            </div>
            <button className={s.checkout__pay}>Go to Checkout
              <img src={arrowIcon} alt="" />
            </button>
            <div className={s.checkout__payment}>
              <img src={visaIcon} alt="" className={s.checkout__payment_icon} />
              <img src={masterIcon} alt="" className={s.checkout__payment_icon} />
              <img src={ppIcon} alt="" className={s.checkout__payment_icon} />
              <img src={appleIcon} alt="" className={s.checkout__payment_icon} />
              <img src={googleIcon} alt="" className={s.checkout__payment_icon} />
            </div>
        </div>
    </>
  )
}

export default Checkout