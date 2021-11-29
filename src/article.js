import react from "react";

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.contents}</p>
    </div>
  );
};

export default Article;
