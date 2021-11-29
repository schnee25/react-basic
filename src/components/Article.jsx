import React from "react";
import { Contents, Title } from "./index"; // 名前付きインポート
const Article = (props) => {
  return (
    <div>
      <Contents contents={props.contents} />
      <Title title={props.title} />
    </div>
  );
};

export default Article;
