import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import DOMPurify from "dompurify";

const Singleblog = () => {
  // State to store post data
  const [post, setPost] = useState({});

  // React Router hook to get the current location
  const location = useLocation();

  // React Router hook for navigation
  const navigate = useNavigate();

  // Extracting post ID from the URL
  const postId = location.pathname.split("/")[2];

  // Accessing user information from the context
  const { currentUser } = useContext(AuthContext);

  // Fetch post data based on the post ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  // Handle post deletion
  const handleDelete = async () => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this post?"
      );
      if (!confirmDelete) {
        return;
      }

      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  return (
    <div className="single page row g-5">
      {/* Content column */}
      <div className="content col-lg-8 col-md-8 col-mb-12">
        {/* Post image */}
        <img src={`../upload/${post.img}`} alt="" />

        {/* User information */}
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            {post && <span>{post.username}</span>}
            <p>Posted {moment(post.date).fromNow()} </p>
          </div>

          {/* Edit and delete options (visible only to the post owner) */}
          {currentUser !== null && currentUser.username === post.username && (
            <div className="edit">
              {/* Edit post link */}
              <Link to={`/write?edit=${postId}`} state={post}>
                <AiFillEdit />
              </Link>

              {/* Delete post button */}
              <div>
                <MdDelete onClick={handleDelete} />
              </div>
            </div>
          )}
        </div>

        {/* Post title */}
        <h1 className="title">{post.title}</h1>

        {/* Post description (HTML sanitized) */}
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.description),
          }}></p>
      </div>

      {/* Menu column */}
      <div className="menu col-lg-4 col-md-4 col-mb-12">
        {/* Display menu with post category */}
        <Menu category={post.category} />
      </div>
    </div>
  );
};

export default Singleblog;
