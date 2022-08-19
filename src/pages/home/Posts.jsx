import { useState } from "react";
import { NavLink } from "react-router-dom";

import s from "./Posts.module.scss";
import Post from "./Post";

import topicOne from "../../assets/img/topic-one.png";
import topicTwo from "../../assets/img/topic-two.png";
import topicThree from "../../assets/img/topic-three.png";
import topicFour from "../../assets/img/topic-four.png";
import topicFive from "../../assets/img/topic-five.png";
import topicSix from "../../assets/img/topic-six.png";
import topicSeven from "../../assets/img/topic-seven.png";
import topicEight from "../../assets/img/topic-eight.png";
import topicNine from "../../assets/img/topic-nine.png";
import topicTen from "../../assets/img/topic-ten.png";
import topicEleven from "../../assets/img/topic-eleven.png";
import topicTwelve from "../../assets/img/topic-twelve.png";
import topicThirteen from "../../assets/img/topic-thirteen.png";
import topicFourteen from "../../assets/img/topic-fourteen.png";
import topicFifteen from "../../assets/img/topic-fifteen.png";

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
  {
    id: Math.random().toString(),
    image: topicFive,
    date: "08.08.2021",
    title: "Thins to know before visiting Cave in Germany",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Adventure",
  },
  {
    id: Math.random().toString(),
    image: topicSix,
    date: "08.08.2021",
    title: "Nina Smith vibrant work collab with Nike Dunk",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Fashion",
  },
  {
    id: Math.random().toString(),
    image: topicSeven,
    date: "08.08.2021",
    title: "Richard Norton photorealistic rendering as real photos",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Technology",
  },
  {
    id: Math.random().toString(),
    image: topicEight,
    date: "08.08.2021",
    title: "25 quality collectors toys inspired by famous films",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Fashion",
  },
  {
    id: Math.random().toString(),
    image: topicNine,
    date: "08.08.2021",
    title: "Richird Norton photorealistic rendering as real photos",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Branding",
  },
  {
    id: Math.random().toString(),
    image: topicTen,
    date: "08.08.2021",
    title: "Dream destinations to visit this year in Paris",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Adventure",
  },
  {
    id: Math.random().toString(),
    image: topicEleven,
    date: "08.08.2021",
    title: "Dream destinations to visit this year in Paris",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Adventure",
  },
  {
    id: Math.random().toString(),
    image: topicTwelve,
    date: "08.08.2021",
    title: "Art of Seasons: 40+ Bright Illustrations by Nature",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Adventure",
  },
  {
    id: Math.random().toString(),
    image: topicThirteen,
    date: "08.08.2021",
    title: "The Anatomy of a Web Page and Basic Elements",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Fashion",
  },
  {
    id: Math.random().toString(),
    image: topicFourteen,
    date: "08.08.2021",
    title: "Types of Contrast in User Interface Design",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Adventure",
  },
  {
    id: Math.random().toString(),
    image: topicFifteen,
    date: "08.08.2021",
    title: "Dream destinations to visit this year in Paris",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Travel",
  },
  {
    id: Math.random().toString(),
    image: topicOne,
    date: "08.08.2021",
    title: "Dream destinations to visit this year in Paris",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    category: "Adventure",
  },
];
const buttons = [
  { id: Math.random().toString(), title: "All", activeFirst: true },
  { id: Math.random().toString(), title: "Adventure" },
  { id: Math.random().toString(), title: "Travel" },
  { id: Math.random().toString(), title: "Fashion" },
  { id: Math.random().toString(), title: "Technology" },
  { id: Math.random().toString(), title: "Branding" },
];

const allPostsFilter = (category, amount = 8) => {
  if (category)
    return allPosts
      .slice(0, amount)
      .filter((post) => post.category.toLocaleLowerCase() === category);
  return allPosts.slice(0, amount);
};

const Posts = ({ postsAmount = 16 }) => {
  const checkPage =
    window.location.pathname === "/runo-react" ? 8 : postsAmount;
  console.log(checkPage);
  const [posts, setPosts] = useState(() => allPostsFilter(null, checkPage));
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredPosts = (category) => {
    switch (category) {
      case "adventure":
        return setPosts(() => allPostsFilter(category, checkPage));
      case "travel":
        return setPosts(() => allPostsFilter(category, checkPage));
      case "fashion":
        return setPosts(() => allPostsFilter(category, checkPage));
      case "technology":
        return setPosts(() => allPostsFilter(category, checkPage));
      case "branding":
        return setPosts(() => allPostsFilter(category, checkPage));
      default:
        return setPosts(() => allPostsFilter(null, checkPage));
    }
  };
  return (
    <>
      <main className={`${s.posts} container`}>
        {checkPage === 8 ? <h2>Popular topics</h2> : null}
        <div className={s.categories}>
          {buttons.map((b) => (
            <button
              key={b.id}
              onClick={() => {
                buttons[0].activeFirst = false;
                setSelectedItem(b.title || b.id);
                filteredPosts(b.title.toLocaleLowerCase());
              }}
              className={`${
                selectedItem === b.title || b.activeFirst
                  ? "category-active"
                  : ""
              }`}
            >
              {b.title}
            </button>
          ))}
          <NavLink to="/runo-react/posts/">
            <button onClick={() => (buttons[0].activeFirst = true)}>
              View All
            </button>
          </NavLink>
        </div>
        <div className={s.posts_wrapper}>
          {posts.map((post) => (
            <NavLink key={post.id} to={`/runo-react/posts/${post.id}`}>
              <Post {...post} />
            </NavLink>
          ))}
        </div>
      </main>
    </>
  );
};

export default Posts;
