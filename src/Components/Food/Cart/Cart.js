import React, { useContext } from 'react'
import styles from './Cart.module.scss'
import CartModal from '../../UI/Modal/CartModal'
import CartContext from '../../../store/cart-context'
import CartItem from './CartItem'

const Cart = ({onClose}) => {

    const {
        'cart-items':cartItemStyle, 
        total, 
        actions, 
        'button--alt':btnAlt, 
        button,
    }=styles;

    const {items, totalPrice}=useContext(CartContext);
    console.log(items);

    return (

        <CartModal onClose={onClose}>
            {/* 주문 내역 */}
            <ul className={cartItemStyle}>
            {items.map(cartItem=>(
                <CartItem 
                    key={cartItem.id} 
                    cart={cartItem}/>
                ))
            }
            </ul>
            
            <div className={total}>
                <span>주문 총액</span>
                <span>{new Intl.NumberFormat('ko-KR').format(totalPrice)}원</span>
            </div>

            <div className={actions}>
                <button className={btnAlt} onClick={onClose}>닫기</button>
                {/* 카트에 담긴게 아무것도 없다면 주문버튼 비활성화 시켜 */}
                {items.length>0&&<button className={button}>주문</button>}
                {/* items.length가 0보다 크면  */}
            </div>
        </CartModal>
    );
}

export default Cart