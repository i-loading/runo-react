import s from "./BigPost.module.scss";

const BigPost = () => {
  return (
    <section className={s["post-big"]}>
      <div>
        <span className={s.cat}>Fashion</span>
        <h2>Richird Norton photorealistic rendering as real photos</h2>
        <p>
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
        <div className={s.line}></div>
        <span className={s.date}>08.08.2021</span>
      </div>
    </section>
  );
};

export default BigPost;
