import React, { useState } from "react";
import { Content, Title, PublishButton, TextInput } from "./index"; // 名前付きインポート

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  console.log(isPublished);
  const publishArticle = () => {
    setIsPublished(true);
  };
  return (
    <div>
      {" "}
      <Title title={props.title} />
      <Content content={props.content} />
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
      {/* 
      onClick={publishArticle}
      onClick={() => publishArticle()}
      はおkだけど
      onClick={publishArticle()}
      はダメ (無限レンダリングが起きるから)
      */}
      <br />
      <TextInput />
    </div>
  );
};

export default Article;
