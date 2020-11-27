import "./App.css";
import Post from "./Post";
import { useState, useEffect } from "react";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);
  // Useeffect Runs a piece of code based on a specific condition
  useEffect(() => {
    //this is where the code runs
    db.collection("posts").onSnapshot((snapshot) =>
      //everytime a new post is added fire this code
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      )
    );
  }, []);
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
      {posts.map(({ id, post }) => (
        <Post
          //add key to only render changed posts
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
