import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WOW from "wowjs";
import "animate.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Articles from "./pages/articles/Articles";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";

import SinglePost from "./pages/post/SinglePost";

export default function App() {
  useEffect(() => {
    new WOW.WOW({
      live: true,
    }).init();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="runo-react/" element={<Home />} />
        <Route path="runo-react/about" element={<About />} />
        <Route path="runo-react/posts" element={<Articles />} />
        <Route path="runo-react/posts/:postId" element={<SinglePost />} />
        <Route path="runo-react/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
