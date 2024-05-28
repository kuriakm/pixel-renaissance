import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Layout from "./pages/layout.js";
import Home from "./pages/home.js";
import Blog from "./pages/blog.js";
import About from "./pages/about.js";
import Store from "./pages/store.js";
import Contact from "./pages/contact.js";
// import Car from "./car.js";
// Use < Car /> to reference function from import

export default function App() {
  return (
    <BrowserRouter>
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
