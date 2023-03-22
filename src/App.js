import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/style.css";

function App() {
  const [posts, setPosts] = useState([
    { id: "1", title: "заголовок 1", description: "description 1" },
    { id: "2", title: "заголовок 2", description: "description 2" },
    { id: "3", title: "заголовок 3", description: "description 3" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title={"Список 1"} />
    </div>
  );
}

export default App;
