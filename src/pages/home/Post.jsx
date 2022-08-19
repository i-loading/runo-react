import s from "./Post.module.scss";

const Post = ({ image, date, title, description, category }) => {
  return (
    <div className={s.post}>
      <div className={s["img_wrap"]}>
        <img src={image} alt={title} />
        <span>{category}</span>
      </div>
      <div className={s["post-info"]}>
        <span>{date}</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Post;
