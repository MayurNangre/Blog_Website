import * as React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Singleblog from "./pages/Singleblog";
import Blog from "./pages/Blog";
import Write from "./pages/Write";
import Navba from "./components/Navbar";
import Footer from "./components/Footer";

import "./style.scss";

const Layout = () => {
  return (
    <>
      <Navba />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Singleblog/:id",
        element: <Singleblog />,
      },
      {
        path: "/Write",
        element: <Write />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
