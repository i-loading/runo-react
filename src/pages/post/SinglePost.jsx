// import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";

import s from "./SinglePost.module.scss";
import innerOne from "../../assets/img/inner_post-one.png";
import innerTwo from "../../assets/img/inner_post-two.png";
import author from "../../assets/img/author.png";
import topicOne from "../../assets/img/topic-eight.png";
import topicTwo from "../../assets/img/topic-nine.png";
import topicThree from "../../assets/img/topic-ten.png";
import topicFour from "../../assets/img/topic-eleven.png";

import Post from "../home/Post";

const allPosts = [
  {
    id: Math.random().toString(),
    image: topicOne,
    date: "08.08.2021",
    title: "Dream destinations to visit this year in Paris",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Adventure",
  },
  {
    id: Math.random().toString(),
    image: topicTwo,
    date: "08.08.2021",
    title: "Breathtaking first-person photos around Europe",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Travel",
  },
  {
    id: Math.random().toString(),
    image: topicThree,
    date: "08.08.2021",
    title: "What collectors need to know about authenticity",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Technology",
  },
  {
    id: Math.random().toString(),
    image: topicFour,
    date: "08.08.2021",
    title: "Instagram artists with great photography skills",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Fashion",
  },
];

const SinglePost = () => {
  // let { postId } = useParams();
  return (
    <>
      <section
        className={`${s["post-header"]} wow animate__animated animate__fadeInDown`}
      >
        <div>
          <span className={s.cat}>Fashion</span>
          <h2>Richird Norton photorealistic rendering as real photos</h2>
          <p>
            Progressively incentivize cooperative systems through technically
            sound functionalities. The credibly productivate seamless data.
          </p>
          <span className={s.date}>By Jennifer Lawrence</span>
        </div>
      </section>
      <div className="container">
        <section
          className={`${s["post-info"]} wow animate__animated animate__slideInUp`}
        >
          <div className={s["read-info"]}>
            <span>08.08.2021</span>
            <div></div>
            <span>4 minutes</span>
          </div>
          <p>
            Seamlessly syndicate cutting-edge architectures rather than
            collaborative collaboration and idea-sharing. Proactively incubate
            visionary interfaces whereas premium benefits. Seamlessly negotiate
            ubiquitous leadership skills rather than parallel ideas.
            Dramatically visualize superior interfaces for best-of-breed
            alignments. Synergistically formulate performance based users
            through customized relationships. Interactively deliver
            cross-platform ROI via granular systems. Intrinsicly enhance
            effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously
            monetize market-driven opportunities with multifunctional users.
            Collaboratively enhance visionary opportunities through
            revolutionary schemas. Progressively network just in time customer
            service without real-time scenarios.
          </p>
          <p>
            Synergistically drive e-business leadership with unique synergy.
            Compellingly seize market positioning ROI and bricks-and-clicks
            e-markets. Proactively myocardinate timely platforms through
            distributed ideas. Professionally optimize enabled core competencies
            for leading-edge sources. Professionally enhance stand-alone
            leadership with innovative synergy. Rapidiously generate backend
            experiences vis-a-vis long-term high-impact relationships.
          </p>
          <div className={s.images}>
            <img src={innerOne} alt="Inner post one" />
            <img src={innerTwo} alt="Inner post two" />
          </div>
          <p>
            Efficiently empower seamless meta-services with impactful
            opportunities. Distinctively transition virtual outsourcing with
            focused e-tailers.
          </p>
          <h2 className={s.quote}>
            “ Monotonectally seize superior mindshare rather than efficient
            technology. ”
          </h2>
          <p>
            Compellingly enhance seamless resources through competitive content.
            Continually actualize 24/365 alignments for resource-leveling
            platforms. Energistically enhance high standards in models and
            professional expertise. Intrinsicly iterate extensible metrics for
            prospective opportunities. Continually develop leading-edge
            experiences through quality e-services.
          </p>
          <div className={s.categories}>
            <span>Adventure</span>
            <span>Photo</span>
            <span>Design</span>
          </div>
          <hr />
          <div className={s["author-info"]}>
            <div className={s["left-info"]}>
              <img src={author} alt="Author" />
              <div>
                <span>By Jennifer Lawrence</span>
                <span>Thinker & Designer</span>
              </div>
            </div>
            <div className={s["right-info"]}>
              <BsFacebook color="#E5E5E5" />
              <BsTwitter color="#E5E5E5" />
              <BsPinterest color="#E5E5E5" />
              <FaBehanceSquare color="#E5E5E5" />
            </div>
          </div>
        </section>
      </div>
      <section className={s["related-posts"]}>
        <div className="container">
          <h3>Related Posts</h3>
          <div className={s["related_wrap"]}>
            {allPosts.map((post, index) => (
              <NavLink
                key={post.id}
                to={`/posts/${post.id}`}
                className="wow animate__animated animate__zoomIn"
                data-wow-delay={`${index * 0.2}s`}
              >
                <Post {...post} />
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
