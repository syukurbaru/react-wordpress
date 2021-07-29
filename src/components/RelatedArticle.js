import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import "./RelatedArticle.css";
import Thumbnail from "./Thumbnail";
import { useHistory } from "react-router-dom";

function RelatedArticle({ category }) {
  const [articles, setArticles] = useState([]);

  let history = useHistory();

  useEffect(() => {
    const fetchArticles = async () => {
      const resp = await axios.get("/wp-json/wp/v2/posts");
      let data = resp.data;
      let filterData = data.filter((arr) => arr.categories[0] === category);
      setArticles(filterData);
    };

    fetchArticles();
  }, [category]);

  return (
    <div className="related">
      <h2>Related Article</h2>
      <div className="content-article">
        {articles.map((article) => (
          <div
            className="wrapper"
            key={article.id}
            onClick={() => history.push(`/detail/${article.id}`)}
          >
            <Thumbnail featured={article.featured_media} />
            <h4>{article.title.rendered}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedArticle;
