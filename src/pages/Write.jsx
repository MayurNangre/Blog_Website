import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  // State variables
  const state = useLocation().state;
  const [value, setValue] = useState(state?.description || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [category, setCat] = useState(state?.category || "");
  const navigate = useNavigate();

  // Function to upload a file
  const upload = async () => {
    try {
      if (!file) {
        return "";
      }
      const formData = new FormData();
      formData.append("file", file);
      // Use axios to post the file data
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.error("Error uploading file:", err);
      throw err;
    }
  };

  // Handle click event for publishing a post
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const imgUrl = file ? await upload() : state.img || "";
      const postData = {
        title,
        description: value,
        category,
        img: imgUrl,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      };

      // If there is state (editing existing post), make a PUT request, else POST request
      if (state) {
        await axios.put(`/posts/${state.id}`, postData);
      } else {
        await axios.post(`/posts/`, postData);
      }

      navigate("/");
    } catch (err) {
      console.error("Error creating/updating post:", err);
    }
  };

  return (
    <div className="write page row g-5">
      <div className="content col-lg-8 col-md-7 col-mb-12">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu col-lg-4 col-md-5 col-mb-12">
        {/* Publish Section */}
        <div className="item">
          <h1>Publish</h1>

          {/* File Upload Input */}
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>

          {/* Publish Button */}
          <div className="buttons">
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>

        {/* Category Section */}
        <div className="item">
          <h1>Category</h1>

          {/* Radio Buttons for Categories */}

          <div className="cat">
            <input
              type="radio"
              checked={category === "AIML"}
              name="cat"
              value="AIML"
              id="AIML"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="AIML">
              Artificial Intelligence and Machine Learning
            </label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={category === "cybersecurity"}
              name="cat"
              value="cybersecurity"
              id="cybersecurity"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cybersecurity">Cyber Security</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={category === "sciencetechnology"}
              name="cat"
              value="sciencetechnology"
              id="sciencetechnology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="sciencetechnology">Science And Technology</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={category === "industrynews"}
              name="cat"
              value="industrynews"
              id="industrynews"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="industrynews">Tech Industry News</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={category === "emergingtechnologies"}
              name="cat"
              value="emergingtechnologies"
              id="emergingtechnologies"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="emergingtechnologies">Emerging Technologies</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
