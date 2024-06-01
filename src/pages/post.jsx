import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/post.css";

const Post = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://kuriakm.github.io/json/post.json"
      );
      setBlogPosts(response.data);
    })();
  }, []);

  /* Get SEO from URL */
  let { seo } = useParams();

  /* Return post with matching SEO */
  const findSeo = (blogPosts) => {
    return blogPosts.find((post) => {
      console.log(post);
      return post.seo === seo;
    });
  };

  const post = findSeo(blogPosts);

  const getHeadline = (games, headline) => {
    if (games.length === 2) {
      return (
        <h2>
          <em>{games[0]}</em> and <em>{games[1]}</em>: {headline}
        </h2>
      );
    }
    return (
      <h2>
        <em>{games}</em>: {headline}
      </h2>
    );
  };

  const getAttribute = (imageCredit) => {};

  /* Return post content */
  if (post != null) {
    return (
      <main id="main-content" className="columns">
        <section id="information" className="three">
          <section id="blog-post">
            <section>
              {getHeadline(post.game, post.headline)}
              <h4>{post.date}</h4>
              <p>{post.subtitle}</p>
            </section>
            <section id="posts"></section>
          </section>
        </section>
      </main>
    );
  }
};
export default Post;
