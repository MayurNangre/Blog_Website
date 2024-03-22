import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);
  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${category}`);
        const sortedPosts = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPosts(sortedPosts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
  };

  return (
    <div className="home page">
      <div className="posts">
        {posts.slice(0, visiblePosts).map((post) => (
          <div className="post row g-5" key={post.id}>
            <div className="image col-lg-5 col-md-6 col-mb-12">
              <div className="img">
                <img src={`../upload/${post.img}`} alt="" />
                <div className="fal">
                  <Link className="link" to={`/Singleblog/${post.id}`}>
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="content col-lg-7 col-md-6 col-mb-12">
              <Link className="link" to={`/Singleblog/${post.id}`}>
                <h1 className="title">{post.title}</h1>
              </Link>
              <p>{getText(post.description)}</p>
              <Link className="link" to={`/Singleblog/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visiblePosts < posts.length && (
        <button className="link load-more-button" onClick={loadMorePosts}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Home;
