import './review.scss';

const arr = [
  {
    name: 'James Williams',
    title: '“ Great Books Collections ”',
    review: 'I was searching this book for many years and I was happy that I could find it here.',
    avatarUrl: '/img/review/1.png',
    rating: 'half-circle',
  },
  {
    name: 'Chris Adams',
    title: '“ Perfect Response Author”',
    review: 'I had a question about the book and the author response was great & comfort.',
    avatarUrl: '/img/review/2.png',
    rating: 'empty-circle',
  },
  {
    name: 'Angeline Flora',
    title: '“ Creative Writing Skill”',
    review: 'Sent an email after to books arrived to ask about the author & I received a reply.',
    avatarUrl: '/img/review/3.png',
    rating: 'half-circle',
  },
];

export default function Reviews() {
  return (
    <div className="review">
      <div className="left-column">
        <h2 className="container__title">
          Words From Our <br />
          Readers
        </h2>
        <p className="description">
          We believe that bookstores are essential to a healthy culture. They’re where authors can
          connect with readers, where we discover new writers, where children get hooked on the
          thrill of reading that can last a lifetime.
        </p>
        <div className="overall-rating">
          <div className="full-circle"></div>
          <div className="full-circle"></div>
          <div className="full-circle"></div>
          <div className="full-circle"></div>
          <div className="half-circle"></div>
          <p>(4.8/5)</p>
        </div>
        <p className="overall">Overall Customer Ratings</p>
      </div>
      <div className="right-column">
        {arr.map((obj, index) => (
          <div className="review__card" key={index}>
            <img src={obj.avatarUrl} alt="Reviewer Avatar" />
            <div className="nameAndRate">
              <h2 className="reviewer-name">{obj.name}</h2>
              <div className="overall-rating">
                <div className="full-circle"></div>
                <div className="full-circle"></div>
                <div className="full-circle"></div>
                <div className="full-circle"></div>
                <div className={obj.rating}></div>
              </div>
            </div>
            <h2 className="review__title">{obj.title}</h2>
            <p className="description">{obj.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
