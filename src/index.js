import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blog from "./pages/blog";
import About from "./pages/about";
import Store from "./pages/store";
import Contact from "./pages/contact";
import Stickers from "./pages/stickers";
import Post from "./pages/post";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* 
        -Route marks what needs to be rendered at the path (url)
        - Element indicates what JavaScript file will be rendered
        - Layout will show in the sub Routes (use as navigation)
        */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          {/* :seo passes post SEO to Post page*/}
          <Route exact path="blog/:seo" element={<Post />} />
          <Route path="store" element={<Store />} />
          <Route path="stickers" element={<Stickers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
