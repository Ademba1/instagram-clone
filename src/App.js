import "./App.css";
import Post from "./Post";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Oscar",
      caption: "woow it works",
      imageUrl: "https://i.ytimg.com/vi/wc4jFStaR2c/maxresdefault.jpg",
    },

    {
      username: "Oscar",
      caption: "woow it works",
      imageUrl: "https://i.ytimg.com/vi/wc4jFStaR2c/maxresdefault.jpg",
    },
  ]);

  return (
    <div className="App">
      {/*Header*/}

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
        />
      </div>

      {/*Posts*/}
      {/*Posts*/}
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
