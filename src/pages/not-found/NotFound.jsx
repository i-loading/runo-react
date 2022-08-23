import { NavLink } from "react-router-dom";

import s from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <section className={s["not_found-header"]}>
      <div>
        <h2>Oops. Something went wrong</h2>
        <p className={s.paragraph}>
          There is no <span>"{window.location.pathname.slice(1)}"</span> page
        </p>
        <NavLink to="/">
          <p className={s.cat}>Back to home page</p>
        </NavLink>
      </div>
    </section>
  );
};

export default NotFound;
