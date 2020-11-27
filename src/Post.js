import React from "react";
import "./Post.css";
export default function Post(props) {
  return (
    <div className="post">
      {/*Header -> avatar + Username*/}
      <h3>Username</h3>
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
