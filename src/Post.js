import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

export default function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      {/*Header -> avatar + Username*/}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          src="/static/images/avatar/1.jpg"
          alt="Oscar"
        />
        <h3>{username}</h3>
      </div>
      {/*Image*/}
      <img className="post__Image" src={imageUrl} alt="" />
      {/*Username + Caption*/}
      <h4 className="post__text">
        <strong>Oscar</strong> {caption}
      </h4>
    </div>
  );
}
