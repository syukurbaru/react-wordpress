import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import "./CardPost.css";
import { useHistory } from "react-router-dom";

function CardPost({ post }) {
  const { featured_media, author, categories } = post;
  const [img, setImg] = useState(null);
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState(null);

  // router
  let history = useHistory();

  useEffect(() => {
    const fetchImg = async () => {
      let resp = await axios.get(`/wp-json/wp/v2/media/${featured_media}`);
      let data = resp.data;
      setImg(data);
    };
    fetchImg();
  }, [featured_media]);

  useEffect(() => {
    const fetchUser = async () => {
      let resp = await axios.get(`/wp-json/wp/v2/users/${author}`);
      let data = resp.data;
      setUser(data);
    };
    fetchUser();
  }, [author]);

  useEffect(() => {
    const fetchCategory = async () => {
      let resp = await axios.get(`/wp-json/wp/v2/categories/${categories[0]}`);
      let data = resp.data;
      setCategory(data);
    };
    fetchCategory();
  }, [categories]);

  // Format Date
  function convertDate(inputFormat) {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("-");
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          {img ? <img src={img.guid.rendered} alt="" /> : <p>Loading....</p>}
        </div>
        <div className="card-body">
          <span className="tag">{category ? category.name : ""}</span>
          <h4>{post.title.rendered}</h4>
          <div className="detail-content">
            <p
              className="p-detail"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></p>
            <button
              className="read-more"
              onClick={() => history.push(`/detail/${post.id}`)}
            >
              Read more
            </button>
          </div>
          <div className="user">
            {user && <img src={user.avatar_urls["96"]} alt="" />}
            <div className="user-info">
              {user && <h5>{user.name}</h5>}
              <small>{convertDate(post.date)}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPost;
