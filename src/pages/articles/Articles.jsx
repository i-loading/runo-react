import s from "./Articles.module.scss";

import Posts from "../home/Posts";

const Articles = () => {
  return (
    <>
      <section className={s["articles-header"]}>
        <div>
          <h2>Articles</h2>
        </div>
      </section>
      <Posts />
    </>
  );
};

export default Articles;
