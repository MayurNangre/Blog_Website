import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link to={`/Singleblog/${post.id}`} className="link">
        <img src={`../upload/${post.img}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{post.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
