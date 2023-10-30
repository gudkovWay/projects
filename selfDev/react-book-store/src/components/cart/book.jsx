import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

import styles from './Cart.module.scss';

export default function BookCartItem({ id, title, price, status, imageUrl }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { count } = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem({ id }));
  };

  const onClickRemove = () => {
    if (window.confirm('U sure?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={styles.item}>
      <img src={imageUrl} alt="Book Preview" />
      <div className={styles.itemProperty}>
        <h3>{title}</h3>
        <h4 className={styles.status}>{status}</h4>
        <p className={styles.price}>$ {price} USD</p>
        <p className={styles.count}>Amount: {count}</p>
      </div>
      <div className={styles.changeNum}>
        <div onClick={onClickMinus} className={styles.math}>
          <svg
            height="512px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z M384,272H128v-32h256V272z" />
            </g>
          </svg>
        </div>
        <div onClick={onClickPlus} className={styles.math}>
          <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h48v48H0z" fill="none" />
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z" />
          </svg>
        </div>
        <div onClick={onClickRemove} className={styles.math}>
          <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h48v48H0V0z" fill="none" />
            <path d="M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zm4.93-14.24l2.83-2.83L24 25.17l4.24-4.24 2.83 2.83L26.83 28l4.24 4.24-2.83 2.83L24 30.83l-4.24 4.24-2.83-2.83L21.17 28l-4.24-4.24zM31 8l-2-2H19l-2 2h-7v4h28V8z" />
            <path d="M0 0h48v48H0z" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  );
}
