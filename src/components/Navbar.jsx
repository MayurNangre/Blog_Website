import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style.scss";
import { AuthContext } from "../context/authContext";

const Navba = () => {
  // Menu items with their respective paths and names
  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/Blog",
      name: "Blog",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "write",
      name: "Write",
    },
  ];

  // Access authentication context to get current user information and logout function
  const { currentUser, logout } = useContext(AuthContext);

  return (
    // Bootstrap Navbar component
    <Navbar className="navbar" expand="lg">
      <Container>
        {/* Brand/logo */}
        <Navbar.Brand className="brand" href="/">
          <h2>Tech Time</h2>
        </Navbar.Brand>

        {/* Navbar toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar content */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation links for menu items */}
          <Nav className="ms-auto">
            {menuData.map((item) => (
              <NavLink
                to={item.path}
                key={item.name}
                style={{ textDecoration: "none" }}>
                {/* Individual menu item */}
                <div className="list_item">{item.name}</div>
              </NavLink>
            ))}
          </Nav>

          {/* Additional navigation links for login/logout */}
          <Nav className="ms-auto">
            {currentUser ? (
              // If user is logged in, show Logout link
              <Nav.Link className="glow-on-hover" onClick={logout}>
                Logout
              </Nav.Link>
            ) : (
              // If user is not logged in, show Login link
              <Nav.Link className="glow-on-hover">
                <Link className="link" to="/login">
                  Login
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navba;
