import './author.scss';

export default function Author() {
  return (
    <div className="author">
      <div className="left-column">
        <div className="image__border">
          <img src="/img/self/self-1.png" alt="Author Image" />
        </div>
      </div>
      <div className="right-column">
        <h2 className="container__title">About the Author</h2>
        <p className="description">
          We believe that bookstores are essential to a healthy culture. They’re where authors can
          connect with readers, where we discover new writers, where children get hooked on the
          thrill of reading that can last a lifetime.
        </p>
        <div className="author__charact">
          <div className="author__charact-h">
            <h3>02</h3>
            <h3>4.5</h3>
            <h3 className="last-charact">04</h3>
          </div>
          <div className="author__charact-p">
            <p>Books Published</p>
            <p>User Reviews</p>
            <p>Best Seller Awards</p>
          </div>
        </div>
        <div className="author__qr">
          <img src="/img/self/qr.png" alt="QR Code" />
          <div>
            <h3>John Abraham , Ph.d</h3>
            <p>Mail: johnabraham@gmail.com</p>
            <p>Phone: (+2) 123 545 9000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
