const Attribute = (imageCredit) => {
  const creditAppend =
    imageCredit.index === 0
      ? ""
      : imageCredit.index > 0 &&
        imageCredit.index !== imageCredit.arrayLength - 1
      ? ", "
      : imageCredit.arrayLength === 2
      ? " and "
      : ", and ";

  return (
    <a href={imageCredit.url} className="attributes">
      {creditAppend}
      {imageCredit.dev}
    </a>
  );
};

export default Attribute;
