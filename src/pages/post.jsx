import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://kuriakm.github.io/json/post-react.json"
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

  const getGames = (games) => {
    if (games.length === 2) {
      return games[0] + " and " + games[1];
    }
    return games;
  };

  /* Return post content */
  if (post != null) {
    return (
      <h2>
        {getGames(post.game)}: {post.headline}
      </h2>
    );
  }
};
export default Post;
