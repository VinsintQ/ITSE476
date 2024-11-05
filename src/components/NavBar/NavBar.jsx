import   '../../App.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      
        <nav>
          <ul>

            <li><Link to="/"> Home </Link></li>
            <li><Link to="/Donwload"> Download </Link></li>
            <li><Link to="/Discover"> Discover </Link></li>
            <li><Link to="/Help"> Get Help </Link></li>
            <li><Link to="/FAQ"> FAQ </Link></li>
            <li><Link to="/About"> About Us </Link></li>
            <li><Link to="/Joinus"> Join Us </Link></li> 
          </ul>
        </nav>
      
    </>
  )
}


export default NavBar;