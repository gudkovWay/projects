import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, clearItems, payButton, clearPay } from '../../redux/slices/cartSlice';

import BookCartItem from './book';
import EmptyCart from './cartEmpty';
import PayCart from './cartPay';

import styles from './Cart.module.scss';

export default function Cart() {
  const dispatch = useDispatch();
  const { isPay, totalPrice, items } = useSelector((state) => state.cart);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  const clickCloseCart = () => {
    dispatch(closeCart(false));
    document.body.classList.toggle('activeCart');
  };

  const onClickClear = () => {
    if (window.confirm('You sure wanna delete all items? ')) {
      dispatch(clearItems());
    }
  };

  const afterPay = () => {
    dispatch(clearPay());
  };

  const onClickPay = () => {
    dispatch(payButton(true));
    setTimeout(() => {
      clickCloseCart();
      afterPay();
    }, 3000);
  };

  if (!totalPrice || totalPrice <= 0) {
    return <EmptyCart />;
  }

  if (isPay) {
    return <PayCart />;
  }

  return (
    <div className={styles.overlay}>
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
        <div className={styles.bookItems}>
          {items.map((item) => (
            <BookCartItem key={item.id} {...item} />
          ))}
        </div>
        <div className={styles.clearAll}>
          <svg
            onClick={onClickClear}
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M30 32h8v4h-8zm0-16h14v4H30zm0 8h12v4H30zM6 36c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V16H6v20zm22-26h-6l-2-2h-8l-2 2H4v4h24z" />
            <path d="M0 0h48v48H0z" fill="none" />
          </svg>
        </div>
        <ul className={styles.totalBlock}>
          <li className={styles.totalBlockList}>
            <span>Total:</span>
            <div></div>
            <b>{totalPrice} USD</b>
          </li>
          <li className={styles.totalBlockList}>
            <span>Delivery: </span>
            <div></div>
            <b>0 USD</b>
          </li>
        </ul>
        <div onClick={onClickPay} className={styles.cartButton}>
          <button>Pay &rarr;</button>
        </div>
      </div>
    </div>
  );
}
