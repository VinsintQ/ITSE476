import "../../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Download"> Download </Link>
          </li>
          <li>
            <Link to="/Discover"> Discover </Link>
          </li>
          <li>
            <Link to="/Docs"> Docs </Link>
          </li>
          <li>
            <Link to="/FAQ"> FAQ </Link>
          </li>
          <li>
            <Link to="/About"> About Us </Link>
          </li>
          <li>
            <Link to="/Joinus"> Join Us </Link>
          </li>
          <li>
            <Link to="/Announcements"> Announcements </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
