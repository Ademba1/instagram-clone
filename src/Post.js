import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

export default function Post(props) {
  return (
    <div className="post">
      {/*Header -> avatar + Username*/}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          src="/static/images/avatar/1.jpg"
          alt="Rafeh"
        />
        <h3>Username</h3>
      </div>
      {/*Image*/}
      <img
        className="post__Image"
        src="https://i.ytimg.com/vi/wc4jFStaR2c/maxresdefault.jpg"
        alt=""
      />
      {/*Username + Caption*/}
      <h4 className="post__text">
        <strong>Oscar</strong> am doing this!!
      </h4>
    </div>
  );
}
