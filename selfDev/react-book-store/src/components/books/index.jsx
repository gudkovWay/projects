import "./books.scss";

const arr = [
  {
    title: "Atomic One’s",
    price: "$ 13.84 USD",
    description:
      "As the book contains theoretical content as well as solved questions.",
    status: "Printed Book",
    imageUrl: "/img/books/book-1.jpg",
  },
  {
    title: "The Dark Light",
    price: "$ 86.11 USD",
    description:
      "As the book contains theoretical content as well as solved questions.",
    status: "Printed Book",
    imageUrl: "/img/books/book-2.jpg",
  },
];

export default function Books() {
  return (
    <div className="container--small">
      <h2 className="container__title">The Author’s Book</h2>
      <div className="books">
        {arr.map((obj, index) => (
          <div className="book" key={index}>
            <img width={285} height={380} src={obj.imageUrl} alt="book" />
            <div className="book-charact">
                <h3 className="book__title">{obj.title}</h3>
                <p className="book__price">{obj.price}</p>
                <p className="book__description">{obj.description}</p>
                <p className="book__status">{obj.status}</p>
                <div className="order__button--small">
                <button class="main__button--small">Order Now</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
