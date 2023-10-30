import "./trust.scss";

const arr = [
  {
    title: "Amazen Corp.",
    description:
      "They has been helping readers, music lovers, and videophiles find quality material.",
    imageUrl: "/img/trust/1.png",
  },
  {
    title: "Megan Books",
    description:
      "We help physical bookstores manage their overstock to the book inventory.",
    imageUrl: "/img/trust/2.png",
  },
  {
    title: "Megank",
    description:
      "Bookstore serving up the full spectrum of Black literature and wine black books.",
    imageUrl: "/img/trust/3.png",
  },
  {
    title: "Urban Store",
    description:
      "We also carry the latest records, issues of all of your favorite comic books.",
    imageUrl: "/img/trust/4.png",
  },
];

export default function Trust() {
  return (
    <div className="trust">
      <h2 className="container__title">Trusted By The Best</h2>
      <div className="trust__companies">
        {arr.map((obj, index) => (
          <div className="company" key={index}>
            <img src={obj.imageUrl} alt="Company Logotype" />
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
