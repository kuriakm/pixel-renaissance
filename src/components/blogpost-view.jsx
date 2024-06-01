import { Link } from "react-router-dom";
import "../styles/blog.css";

const BlogPost = (blogPost) => {
  const imageSrc = `https://kuriakm.github.io/json/posts/${blogPost.thumbnail.name}`;

  const getGames = (games) => {
    if (games.length === 2) {
      return games[0] + " and " + games[1];
    }
    return games;
  };

  return (
    /* Set link to post SEO */
    <Link to={blogPost.seo}>
      <section className="post-content">
        <img src={imageSrc} alt={blogPost.thumbnail.alt} />
        <div className="post-text">
          <h4>
            {getGames(blogPost.game)}: {blogPost.headline}
          </h4>
        </div>
      </section>
    </Link>
  );
};

export default BlogPost;
