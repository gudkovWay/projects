import "./article.scss";

const arr = [
  {
    title: "Significant reading has more info number",
    description:
      "Override the digital divide with additional clickthroughs from DevOps for real-time schemas.",
    date: "October 6, 2021",
    postImage: "/img/post/1.png",
  },
  {
    title: "Many variations of pass majority have suffered",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
    date: "October 6, 2021",
    postImage: "/img/post/2.png",
  },
  {
    title: "Words which don’t look even slightly believable",
    description:
      "Podcasting operational change management inside of workflows to establish a framework.",
    date: "October 6, 2021",
    postImage: "/img/post/3.png",
  },
];


export default function Articles() {
  return (
    <div className="article">
      <h2 className="container__title">Articles & Resources</h2>
      <div className="posts">
        {arr.map((obj, index) => (
          <div className="post" key={index}>
            <img src={obj.postImage} alt="Post Image" />
            <div className="post__characts">
              <h2 className="post__title">{obj.title}</h2>
              <p className="description">{obj.description}</p>
              <div className="post__charact">
                <a href="#!">Readmore</a>
                <p className="post__date">{obj.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
