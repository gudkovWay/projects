import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro">
      <div className="left-column">
        <h3 className="welcome">Welcome To Pages!!!</h3>
        <h1>
          Your Books From <br />
          The Best Writer.
        </h1>
        <p className="description">
          We believe that reading books are essential to a healthy culture.{" "}
          <br />
          They’re where authors can connect with readers.
        </p>
        <div className="intro__buttons">
          <div className="order__button">
            <button className="main__button">Order Today</button>
          </div>
          <a href="#!" className="demo__link">
            Read Free Demo
          </a>
        </div>
        <div className="intro__charact">
          <div className="headers">
            <h3>Pages:</h3>
            <h3>Length:</h3>
            <h3>Rating:</h3>
          </div>
          <div className="descr">
            <p>250pages</p>
            <p>10 Hours</p>
            <p>4.5/5 (305 ratings)</p>
          </div>
        </div>
      </div>
      <div className="right-column">
        <img src="/img/intro/book.jpg" alt="Book" />
      </div>
    </div>
  );
}
