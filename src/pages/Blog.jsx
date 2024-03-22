import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlogCategory from "../components/blogcategory";

const Blog = () => {
  // State variables for data fetching
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      // Fetch data for different blog categories
      const response1 = await axios.get("/posts?category=AIML");
      const response2 = await axios.get("/posts?category=cybersecurity");
      const response3 = await axios.get("/posts?category=sciencetechnology");
      const response4 = await axios.get("/posts?category=industrynews");
      const response5 = await axios.get("/posts?category=emergingtechnologies");

      // Set data in state
      setData([
        response1.data,
        response2.data,
        response3.data,
        response4.data,
        response5.data,
      ]);

      // Data fetching is complete
      setIsLoading(false);
    } catch (error) {
      // Handle error during data fetching
      setError("Error fetching data. Please try again later.");
      setIsLoading(false);
    }
  };

  // Loading indicator while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error message if there was an issue with data fetching
  if (error) {
    return <div>{error}</div>;
  }

  // Render different blog categories with the fetched data
  return (
    <div className="Blog page">
      <div>
        <BlogCategory
          category="Artificial Intelligence and Machine Learning"
          posts={data[0]}
        />
      </div>
      <div>
        <BlogCategory category="Cyber Security" posts={data[1]} />
      </div>
      <div>
        <BlogCategory category="Science And Technology" posts={data[2]} />
      </div>
      <div>
        <BlogCategory category="Tech Industry News" posts={data[3]} />
      </div>
      <div>
        <BlogCategory category="Emerging Technologies" posts={data[4]} />
      </div>
    </div>
  );
};

export default Blog;
