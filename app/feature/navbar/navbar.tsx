import "./navbar.css";
import { Link } from "@remix-run/react";

export default function CustomNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src="" alt="" className="avatar"></img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="transfer">
                Transfers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="movements">
                Movements
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="profile">
                Profile
              </Link>
            </li>
          </ul>
          <Link className="nav-link notification-btn" to="/">
            🔔
          </Link>
        </div>
      </div>
    </nav>
  );
}
