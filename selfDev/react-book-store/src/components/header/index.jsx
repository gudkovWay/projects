import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { openCart } from '../../redux/slices/cartSlice';
import Cart from '../cart';

import './header.scss';

export default function Header({ isCurrent }) {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.cart);

  const clickOpenCart = () => {
    dispatch(openCart(true));
    document.body.classList.toggle('activeCart');
  };

  return (
    <header className="header">
      {isOpen && <Cart />}
      <div className="header__link">
        <Link to="/">
          <img src="/img/logotype.svg" alt="logotype" />
        </Link>
        <div className="header__socials">
          <div className="header__social">
            <a href="#!">
              <img src="/img/header/facebook.svg" alt="facebook" />
            </a>
          </div>
          <div className="header__social">
            <a href="#!">
              <img src="/img/header/twitter.svg" alt="twitter" />
            </a>
          </div>
          <div className="header__social">
            <a href="#!">
              <img src="/img/header/linkendiln.svg" alt="linkendin" />
            </a>
          </div>
        </div>
      </div>
      <div className="header__nav">
        <ul>
          <Link to="/">
            <li>
              <a className={`nav__link ${isCurrent === 0 ? 'current__link' : ''}`} href="#!">
                Home
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <a className={`nav__link ${isCurrent === 1 ? 'current__link' : ''}`} href="#!">
                About
              </a>
            </li>
          </Link>
          <li>
            <a className="nav__link" href="#!">
              Pages
            </a>
          </li>
          <li>
            <a className="nav__link" href="#!">
              Contact Us
            </a>
          </li>
          <li onClick={clickOpenCart}>
            <a className="nav__link" href="#!">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.60593 2H0V0H4.39407L4.84288 4H16V9.93845L3.76941 12.3694L2.60593 2ZM15.5 17C14.6716 17 14 16.3284 14 15.5C14 14.6716 14.6716 14 15.5 14C16.3284 14 17 14.6716 17 15.5C17 16.3284 16.3284 17 15.5 17ZM5.5 17C4.67157 17 4 16.3284 4 15.5C4 14.6716 4.67157 14 5.5 14C6.32843 14 7 14.6716 7 15.5C7 16.3284 6.32843 17 5.5 17Z"
                  fill="black"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="order__button">
        <button className="main__button">Order Today</button>
      </div>
    </header>
  );
}
