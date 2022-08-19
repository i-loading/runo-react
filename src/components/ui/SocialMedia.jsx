import s from "./SocialMedia.module.scss";
import { BsFacebook, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className={s.wrapper}>
      <li>
        <BsFacebook color="#E5E5E5" />
      </li>
      <li>
        <BsTwitter color="#E5E5E5" />
      </li>
      <li>
        <BsYoutube color="#E5E5E5" />
      </li>
      <li>
        <BsPinterest color="#E5E5E5" />
      </li>
      <li>
        <FaBehanceSquare color="#E5E5E5" />
      </li>
    </div>
  );
};

export default SocialMedia;
