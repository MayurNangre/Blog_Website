import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ category }) => {
  // State to store posts related to the specified category
  const [posts, setPosts] = useState([]);

  // Fetch posts based on the selected category when the component mounts or category changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts from the server based on the selected category
        const res = await axios.get(`/posts/?category=${category}`);
        // Update the state with the fetched posts
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [category]); // Re-run the effect when the category changes

  return (
    <div className="menu">
      {/* Section heading */}
      <h1 className="heading">Other posts you may like</h1>

      {/* Map through the posts and create links to Singleblog for each post */}
      {posts.map((post) => (
        <Link className="link" to={`/Singleblog/${post.id}`} key={post.id}>
          {/* Individual post item */}
          <div className="post">
            <img src={`../upload/${post.img}`} alt="" />
            <h2 className="title">{post.title}</h2>
            <button>Read More</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
