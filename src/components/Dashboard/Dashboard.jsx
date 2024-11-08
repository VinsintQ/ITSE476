// src/components/Dashboard.jsx

import { FaFileAlt, FaStar, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../Highlights.css';
const Dashboard = () => {
    return (
      <main>
        <h1>Welcome to Fitness Log</h1>
        <p>
        Fitness Log is an open source project that allows you to track your workouts and fitness goals.
        </p>
        <h3>Features </h3>
        <ul>
          <li>Track your workouts</li>
          <li>calculate calories</li>
          <li>View your progress</li>
          <li>calculate bmi </li>
        </ul>
        <div className="highlights-container">
      
      <div className="highlight-item">
        <div className="icon-circle"><FaStar /></div>
        <h2>Fitness Log Conference 2024</h2>
        <p>December 10 – 12 in Manama. We'll have workshops, discussions and lots of fun!</p>
        <p className="highlight-link">Join us there</p>
      </div>
      <div className="highlight-item">
        <div className="icon-circle"><FaThumbsUp /></div>
        <h2>Fantastic People</h2>
        <p>Fitness Log is about more than software. It’s about people, culture, creation, sharing and collaboration.</p>
        <a href="#join-today" className="highlight-link"><Link to="/Joinus"> Join Us today</Link></a>
      </div>
    </div>
        
      </main>
    );
  };
  
  export default Dashboard;