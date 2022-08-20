import s from "./Articles.module.scss";

import Posts from "../home/Posts";

const Articles = () => {
  return (
    <>
      <section
        className={`${s["articles-header"]} wow animate__animated animate__fadeInDown`}
      >
        <div>
          <h2>Articles</h2>
        </div>
      </section>
      <Posts />
    </>
  );
};

export default Articles;
