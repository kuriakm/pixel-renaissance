import { Link } from "react-router-dom";
import "../styles/blog.css";

const BlogPost = (blogPost) => {
  const imageSrc = `https://pixel-renaissance-mongodb.onrender.com/images/posts/${blogPost.thumbnail.name}`;

  const getHeadline = (games, headline) => {
    if (games.length === 2) {
      return (
        <h4>
          <em>{games[0]}</em> and <em>{games[1]}</em>: {headline}
        </h4>
      );
    }
    return (
      <h4>
        <em>{games}</em>: {headline}
      </h4>
    );
  };

  return (
    /* Set link to post SEO */
    <Link to={blogPost.seo}>
      <section className="post-content">
        <img src={imageSrc} alt={blogPost.thumbnail.alt} />
        <div className="post-text">
          {getHeadline(blogPost.game, blogPost.headline)}
        </div>
      </section>
    </Link>
  );
};

export default BlogPost;
