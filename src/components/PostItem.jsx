import React from "react";

const PostItem = function (props) {
  return (
    <div className="post">
      <div className="post__wrapper">
        <h2 className="post__title">
          <b>{props.post.id}.</b>
          {props.post.title}
        </h2>
        <div className="post__description">{props.post.description}</div>
      </div>

      <button className="post__button">Отправить</button>
    </div>
  );
};

export default PostItem;
