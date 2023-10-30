import React from 'react';

import { useDispatch } from 'react-redux';
import styles from './Cart.module.scss';
import { closeCart, closeCartPay } from '../../redux/slices/cartSlice';

export default function PayCart() {
  const dispatch = useDispatch();

  const clickCloseCart = () => {
    dispatch(closeCart(false));
    dispatch(closeCartPay(false));
    document.body.classList.toggle('activeCart');
  };

  return (
    <div className={styles.root}>
      <div className={styles.cartHeader}>
        <h2>Cart</h2>
        <button onClick={clickCloseCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            fill="black"
            height="512">
            <path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" />
          </svg>
        </button>
      </div>

      <div className={styles.emptyCartHeader}>
        <div className={styles.doneIcon}>
          <img src="/img/cart/done.png" alt="Done Icon" />
        </div>
        <div className={styles.doneCart}>
          <h2 className="container__title">Done!</h2>
          <p>
            Estimated courier <br /> delivery time: 3 hours
          </p>

          <div onClick={clickCloseCart} className={styles.cartButton}>
            <button>Back to main page &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}