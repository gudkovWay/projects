import './copy.scss';

export default function Copy() {
  return (
    <div className="copy">
      <div className="left-column">
        <h2 className="container__title">Get Book Copy Today!</h2>
        <p className="description">
          We believe that bookstores are essential to a healthy culture. They’re where authors can
          connect with readers.
        </p>
        <div className="order__button--small">
          <button className="main__button--small">Order Now</button>
        </div>
      </div>
      <div className="right-column">
        <img src="/img/copy/coffe.png" alt="Book" />
      </div>
    </div>
  );
}
