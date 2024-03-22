import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const BlogCategory = ({ category, posts }) => {
  // Conditional rendering for fallback content when data is empty or null
  if (!posts || posts.length === 0) {
    return (
      <div className={`${category.toLowerCase()} blog-div row`}>
        <h1 className="heading">{category}</h1>
        <p>No data available.</p>
      </div>
    );
  }
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: posts.length < 3 ? posts.length : 3,
    slidesToScroll: 1,
  };

  return (
    <div className={`${category.toLowerCase()} blog-div row`}>
      <h1 className="heading">{category}</h1>
      <Slider {...sliderSettings}>
        {posts.map((post) => (
          <div key={post.id}>
            <div className="card">
              <Link to={`/Singleblog/${post.id}`} className="link">
                <img
                  src={`../upload/${post.img}`}
                  className="card-img-top"
                  alt={`Thumbnail for the blog post: ${post.title}`}
                />
                <div className="card-body">
                  <p className="card-text">{post.title}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCategory;
