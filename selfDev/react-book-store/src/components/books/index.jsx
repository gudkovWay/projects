import './books.scss';

import BookItem from './item';
import books from '../../books.json';

export default function Books() {
  return (
    <div className="container--small">
      <h2 className="container__title">The Author’s Book</h2>
      <div className="books">
        {books.map((obj) => (
          <BookItem
            key={obj.id}
            id={obj.id}
            title={obj.title}
            price={obj.price}
            description={obj.description}
            status={obj.status}
            imageUrl={obj.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
