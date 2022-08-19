import Posts from "./Posts";
import Slider from "./Slider";
import BigPost from "./BigPost";
import EditorsPick from "./EditorsPick";

const Home = () => {
  return (
    <>
      <Slider />
      <Posts />
      <BigPost />
      <EditorsPick />
    </>
  );
};

export default Home;
