import React from "react";
import aboutbg from "../images/aboutbg.png";
import AI from "../images/AI.jpg";
import space from "../images/space.jpg";
import cs from "../images/CS.jpg";
import emerging from "../images/emerging.jpg";
import tech from "../images/tech.jpg";

import "../style.scss";

import "react-quill/dist/quill.snow.css";
import { ContactUs } from "../components/Contact";

const About = () => {
  return (
    <div className="about page">
      {/* About Section */}
      <img className="img" src={aboutbg} alt="about"></img>
      <div className="about-us">
        <h1 className="heading">About Us</h1>
        <p>
          {/* Introduction paragraph 1 */}
          Welcome to our blogging website! We are passionate about sharing
          knowledge, experiences, and ideas through the power of written words.
          Our platform serves as a hub for writers, enthusiasts, and curious
          minds alike.
        </p>
        <p>
          {/* Introduction paragraph 2 */}
          Our mission is to provide a space where individuals can express
          themselves, engage with meaningful content, and foster discussions.
          Whether you're a seasoned writer or new to blogging, we invite you to
          join our community and embark on a journey of discovery, creativity,
          and connection.
        </p>
      </div>

      {/* What You'll Find Here Section */}
      <div className="website-desc">
        <h3 className="heading">What You'll Find Here</h3>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {/* Indicator Buttons */}
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active white-button"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              className="white-button"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              className="white-button"
              aria-label="Slide 3"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              className="white-button"
              aria-label="Slide 4"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="4"
              className="white-button"
              aria-label="Slide 5"></button>
          </div>
          {/* Carousel Inner Content */}
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src={AI}
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* Title for Slide 1 */}
                <h5 className="title">
                  Artificial Intelligence And Machine Learning
                </h5>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={space}
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* Title for Slide 2 */}
                <h5 className="title">Science and Technology</h5>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="carousel-item">
              <img
                src={cs}
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* Title for Slide 3 */}
                <h5 className="title">Cyber Security</h5>
              </div>
            </div>
            {/* Slide 4 */}
            <div className="carousel-item">
              <img
                src={emerging}
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* Title for Slide 4 */}
                <h5 className="title">Emerging Technologies</h5>
              </div>
            </div>
            {/* Slide 5 */}
            <div className="carousel-item">
              <img
                src={tech}
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* Title for Slide 5 */}
                <h5 className="title">Tech Industry News</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <ContactUs />

      {/* Conclusion Section */}
      <div className="about-end">
        <p>
          {/* Closing message */}
          Thank you for visiting our blogging website. We are dedicated to
          providing you with inspiration, valuable insights, and the opportunity
          to forge meaningful connections within our tech community. Happy
          reading and stay tuned for exciting tech content!
        </p>
        {/* Flower Emoji */}
        <p className="flower-emoji">🌸🌸🌸</p>
      </div>
    </div>
  );
};

export default About;
