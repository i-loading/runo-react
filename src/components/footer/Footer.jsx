import s from "./Footer.module.scss";
import SocialMedia from "./../ui/SocialMedia";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s["main-footer"]}>
        <div className="container">
          <ul>
            <h3>Contact the Publisher</h3>
            <li>mike@runo.com</li>
            <li>+944 450 904 505</li>
          </ul>
          <ul>
            <h3>Explorate</h3>
            <li>About</li>
            <li>Partners</li>
            <li>Job Opportunities</li>
            <li>Advertise</li>
            <li>Membership</li>
          </ul>
          <ul>
            <h3>Headquarter</h3>
            <li className={s.address}>
              191 Middleville Road, NY 1001, Sydney Australia
            </li>
          </ul>
          <ul>
            <h3>Connections</h3>
            <SocialMedia />
          </ul>
        </div>
      </div>
      <div className={s["sec-footer"]}>
        <div className="container">
          <h4>2021 | RUNO Publisher Studio</h4>
          <p>Subscribe Now</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
