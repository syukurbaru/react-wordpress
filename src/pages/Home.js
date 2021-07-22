import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import "./Home.css";

import CardPost from "../components/CardPost";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let resp = await axios.get("/wp-json/wp/v2/posts");
      let data = resp.data;
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {/* {JSON.parse(posts, null, 2)} */}
      <div className="card-post">
        {posts.map((post) => {
          return <CardPost post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
