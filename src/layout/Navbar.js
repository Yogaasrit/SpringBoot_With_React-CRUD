import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-md">
          <a className="navbar-brand" href="/">
            React_Spring_Crud
          </a>
        </div>
        <Link className="btn btn-outline-light" to="/addUser">Add User</Link>
      </nav>
    </div>
  );
};

export default Navbar;
