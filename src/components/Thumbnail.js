import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import "./Thumbnail.css";

function Thumbnail({ featured }) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const fetchImg = async () => {
      let resp = await axios.get(`/wp-json/wp/v2/media/${featured}`);
      let data = resp.data;
      setImg(data);
    };
    fetchImg();
  }, [featured]);

  return <>{img && <img src={img.guid.rendered} alt="" />}</>;
}

export default Thumbnail;
