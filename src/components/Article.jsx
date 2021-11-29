import React from "react";
import { Content, Title } from "./index"; // 名前付きインポート
const Article = (props) => {
  return (
    <div>
      {" "}
      <Title title={props.title} />
      <Content content={props.content} />
    </div>
  );
};

export default Article;
