import React, { useState, useEffect } from "react";
import "./DetailBlog.css";
import axios from "../axios/axios";
import { CalendarToday, PermIdentity, Class } from "@material-ui/icons";
import { useParams } from "react-router-dom";

function DetailBlog() {
  const [post, setPost] = useState({});
  const [img, setImg] = useState(null);
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState(null);

  let { postId } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      let resp = await axios.get("/wp-json/wp/v2/posts/" + postId);
      let data = resp.data;
      setPost(data);
    };
    fetchPosts();
  }, [postId]);

  useEffect(() => {
    const fetchImg = async () => {
      let resp = await axios.get(`/wp-json/wp/v2/media/${post.featured_media}`);
      let data = resp.data;
      setImg(data);
    };
    fetchImg();
  }, [post]);

  useEffect(() => {
    const fetchUser = async () => {
      let resp = await axios.get(`/wp-json/wp/v2/users/${post.author}`);
      let data = resp.data;
      setUser(data);
    };
    fetchUser();
  }, [post]);

  useEffect(() => {
    const fetchCategory = async () => {
      let resp = await axios.get(
        `/wp-json/wp/v2/categories/${post.categories ? post.categories[0] : ""}`
      );
      let data = resp.data;
      setCategory(data);
    };
    fetchCategory();
  }, [post]);

  // Format Date
  function convertDate(inputFormat) {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("-");
  }

  return (
    <div className="article-blog">
      {img ? (
        <img src={img ? img.guid.rendered : ""} alt="" />
      ) : (
        <img
          src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif"
          alt=""
        />
      )}

      <div className="article-meta">
        <h1>{post.title ? post.title.rendered : ""}</h1>
        <div className="meta">
          <div className="meta-data">
            <CalendarToday color="primary" />
            <span>{post ? convertDate(post.date) : ""}</span>
          </div>
          <div className="meta-data">
            <PermIdentity color="primary" />
            <span>{user ? user.name : ""}</span>
          </div>
          <div className="meta-data category-blog">
            <Class color="primary" />
            <span>{category ? category.name : ""}</span>
          </div>
        </div>
      </div>
      <div className="article-content">
        {post.content && (
          <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
        )}
      </div>
    </div>
  );
}

export default DetailBlog;
