import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactbg from "../images/contact.webp";

export const ContactUs = () => {
  // Create a reference to the form element
  const form = useRef();

  // Function to send email using Email.js service
  const sendEmail = (e) => {
    e.preventDefault();

    // Send form data to Email.js service
    emailjs
      .sendForm(
        "service_utr8mlj",
        "template_ndb95fl",
        form.current,
        "JqlvqUoSovo5rcnzX"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Display success message using alert
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          // Display error message using alert
          alert("Error sending email. Please try again.");
        }
      );

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <div className="contact row">
      {/* Contact Image Section */}
      <div className="contact-img col-lg-6">
        <img
          className="contact-image"
          src={contactbg}
          alt="Contact background"
        />
      </div>

      {/* Contact Form Section */}
      <div className="contact-forms col-lg-6">
        <h1 className="heading">Contact Us</h1>

        {/* Contact Form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="user_name">Name:</label>
            <input
              className="input"
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Enter Name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="user_email">Email:</label>
            <input
              className="input"
              type="email"
              name="user_email"
              placeholder="Enter Email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="input"
              name="message"
              placeholder="Enter Message"
              cols={40}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <input className="button" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};
