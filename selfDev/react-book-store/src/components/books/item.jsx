import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, openCart } from '../../redux/slices/cartSlice';

export default function BookItem({ id, title, description, status, price, imageUrl }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      status,
    };
    dispatch(addItem(item));
    dispatch(openCart(true));
    document.body.classList.toggle('activeCart');
  };

  return (
    <div className="book" key={id}>
      <img width={285} height={380} src={imageUrl} alt="book" />
      <div className="book-charact">
        <h3 className="book__title">{title}</h3>
        <p className="book__price">$ {price} USD</p>
        <p className="book__description">{description}</p>
        <p className="book__status">{status}</p>
        <div onClick={onClickAdd} className="order__button--small">
          <button className="main__button--small">Order Now</button>
        </div>
      </div>
    </div>
  );
}
