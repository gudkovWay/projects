import "./updates.scss";

export default function Updates() {
  return (
    <div className="update">
      <h2 className="container__title">Get The Best Updates</h2>
      <p className="description">
        Subscribe with your mail id to know the current update in book <br />
        edition at your fingertip with in a minute.
      </p>
      <form action="">
        <input type="text" placeholder="Your Email ID..." />
        <div className="submit__button">
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}
