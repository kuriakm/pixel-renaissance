import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/post.css";
import AboutWriter from "../components/about-writer";
import Attribute from "../components/attribute";
import PostContent from "../components/post-content";

const Post = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://pixel-renaissance-server.onrender.com/images/posts/"
      );
      setBlogPosts(response.data);
    })();
  }, []);

  /* Get SEO from URL */
  let { seo } = useParams();

  /* Return post with matching SEO */
  const findSeo = (blogPosts) => {
    return blogPosts.find((post) => {
      return post.seo === seo;
    });
  };

  const post = findSeo(blogPosts);

  /* Return post content if found post is not null */
  if (post != null) {
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

    const thumbnail = `https://pixel-renaissance-server.onrender.com/images/posts/${post.thumbnail.name}`;

    return (
      <main id="main-content" className="columns">
        <section id="information" className="four">
          <section id="blog-post">
            <section>
              {getHeadline(post.game, post.headline)}
              <h4>{post.date}</h4>
              <p>{post.subtitle}</p>
            </section>
            <section id="posts">
              <img src={thumbnail} alt={post.thumbnail.alt} />
              <section className="attribute">
                Image by{" "}
                {post.thumbnail.credit.map((credits, index, array) => (
                  <Attribute
                    key={credits.dev}
                    dev={credits.dev}
                    url={credits.url}
                    index={index}
                    arrayLength={array.length}
                  />
                ))}
              </section>
              {post.content.map((content, index) => (
                <PostContent
                  key={index}
                  line={content.line}
                  image={content.image}
                />
              ))}
            </section>
          </section>
        </section>
        <AboutWriter />
      </main>
    );
  }
};
export default Post;
