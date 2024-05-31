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
          <Route path="store" element={<Store />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
