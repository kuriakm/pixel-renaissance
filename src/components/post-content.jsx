import Attribute from "./attribute";

const PostContent = (content) => {
  /* If there is an image, append it after content line */
  if (Object.keys(content.image).length !== 0) {
    const imageSrc = `https://pixel-renaissance-mongodb.onrender.com/images/posts/${content.image.name}`;
    return (
      <div>
        <p>{content.line}</p>
        <img src={imageSrc} alt={content.image.name} />
        <section className="attribute">
          Image by{" "}
          {content.image.credit.map((credits, index, array) => (
            <Attribute
              key={credits.dev}
              dev={credits.dev}
              url={credits.url}
              index={index}
              arrayLength={array.length}
            />
          ))}
        </section>
      </div>
    );
  }

  /* Otherwise, return line by itself */
  return (
    <div>
      <p>{content.line}</p>
    </div>
  );
};

export default PostContent;
