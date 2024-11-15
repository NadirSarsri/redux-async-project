import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink end to="/" className="nav-link active">
              Home
            </NavLink>
            <NavLink to="posts" className="nav-link active">
              Posts
            </NavLink>
            <NavLink to="addPost" className="nav-link active">
              Add post
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
