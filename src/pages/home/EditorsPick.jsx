import { NavLink } from "react-router-dom";

import s from "./EditorsPick.module.scss";
import editorOne from "../../assets/img/editor-one.png";
import editorTwo from "../../assets/img/editor-two.png";
import editorThree from "../../assets/img/editor-three.png";

const editorsPosts = [
  {
    id: Math.random().toString(),
    image: editorOne,
    date: "08.08.2021",
    title: "Richird Norton photorealistic rendering as real photos",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Fashion",
  },
  {
    id: Math.random().toString(),
    image: editorTwo,
    date: "08.08.2021",
    title: "Richird Norton photorealistic rendering as real photos",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Fashion",
  },
  {
    id: Math.random().toString(),
    image: editorThree,
    date: "08.08.2021",
    title: "Richird Norton photorealistic rendering as real photos",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Fashion",
  },
];

const EditorPost = ({ image, date, title, description, category }) => (
  <div className={s["post-overlay"]}>
    <img src={image} alt={title} />
    <span className={s.cat}>{category}</span>
    <div>
      <span className={s.date}>{date}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const EditorsPick = () => {
  return (
    <section className={`${s["editor_wrap"]} container`}>
      <h2>Editor's Pick</h2>
      <div className={s["editor-posts"]}>
        {editorsPosts.map((post) => (
          <NavLink key={post.id} to={`posts/${post.id}`}>
            <EditorPost {...post} />
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default EditorsPick;
