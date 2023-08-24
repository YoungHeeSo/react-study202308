import React, { useContext } from 'react';

import styles from './HeaderCartButton.module.scss';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({onShow}) => {

  const {items} =useContext(CartContext);

  const numerofCart= items.reduce((accum, item)=>{
    return accum + item.amount;
  },0);

  const { button, icon, badge } = styles;

  return (
    <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numerofCart}</span>
    </button>
  );
};

export default HeaderCartButton;
