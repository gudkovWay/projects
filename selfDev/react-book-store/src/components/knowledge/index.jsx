import "./knowledge.scss";

const arr = [
  {
    title: "Chapter-1 Get Started Intro",
    description:
      "You can double your knowledge by reading this ever needed book that can last a lifetime.",
    pages: "106pages",
    length: "2 Hours",
  },
  {
    title: "Chapter-2 The Roman Culture",
    description:
      "It will help to improve your life career with the perfect and needed knowledge about your life.",
    pages: "180pages",
    length: "3 Hours",
  },
  {
    title: "Chapter-3 How They Servived",
    description:
      "We wanted to create an easy, convenient way for you to get your books & support.",
    pages: "250pages",
    length: "4 Hours",
  },
  {
    title: "Chapter-4 The End Of Romans",
    description:
      "Promote your book via Pages shop to support your writing & reading career.",
    pages: "175pages",
    length: "3 Hours",
  },
];

export default function Knowledge() {
  return (
    <div className="knowledge">
      <h2 className="container__title">Enhance Knowledge & Vision</h2>
      <div className="chapters">
        {arr.map((obj, index) => (
          <div className="chapter" key={index}>
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
            <div className="chapter__charact">
              <h3>Pages :</h3>
              <p>{obj.pages}</p>
              <h3>Length :</h3>
              <p>{obj.length}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="free-demo">
        <div className="order__button order__button--bigger">
          <button className="main__button main__button--bigger">
            Start a 15-Days Free Trail
          </button>
        </div>
        <p className="description">
          Short description about each chapter <br />
          <a href="#!">Have any questions?</a> Contact us
        </p>
      </div>
    </div>
  );
}
