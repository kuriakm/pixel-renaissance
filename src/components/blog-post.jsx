import "../styles/blog.css";

const BlogPost = (blogPost) => {
  const imageSrc = `https://kuriakm.github.io/json/posts/${blogPost.thumbnail.name}`;
  return (
    <section className="post-content">
      <img src={imageSrc} alt={blogPost.thumbnail.alt} />
      <div className="post-text">
        <h4>
          <em>
            {blogPost.game.length === 2
              ? blogPost.game[0] + " and " + blogPost.game[1]
              : blogPost.game}
          </em>
          : {blogPost.headline}
        </h4>
      </div>
    </section>
  );
};

export default BlogPost;
