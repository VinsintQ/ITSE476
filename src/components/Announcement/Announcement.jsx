// src/components/Dashboard.jsx

import { FaFileAlt, FaStar, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
// import '../../Highlights.css';

const Announcement = () => {
  return (
    <main>
     <h1>Latest Announcements</h1>

{/* Fitness Log v2.0 Release Announcement */}
<div
  style={{
    background: "#f4f4f9",
    border: "1px solid #d3d3d3",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "20px",
  }}
>
  <h2>Fitness Log v2.0 Released!</h2>
  <p>
    <em>Posted on November 7, 2024 by Fitness Log Team</em>
  </p>
  <p>
    We’re excited to announce the release of <strong>Fitness Log v2.0</strong>! Our latest update introduces powerful new features and usability improvements, enhancing the way you can track and manage your fitness journey.
  </p>
  <h3>New features in v2.0 include:</h3>
  <ul>
    <li>Revamped dashboard for quick access to recent workouts and progress</li>
    <li>Goal-tracking tools to help you stay on top of fitness milestones</li>
    <li>Integrations with popular wearable devices for real-time activity sync</li>
    <li>Progress charts and weekly insights for a comprehensive view of your achievements</li>
    <li>Mobile-friendly interface with offline access for logging workouts anywhere</li>
  </ul>
  <p>
    Thanks to our community of contributors for their valuable input, testing, and support. Together, we’re building a fitness platform that empowers everyone to reach their health goals!
  </p>
  <button
    style={{
      background: "#ff5722",
      border: "none",
      borderRadius: "5px",
      color: "#fff",
      padding: "10px 20px",
      marginTop: "10px",
      cursor: "pointer",
    }}
  >
    Get Fitness Log v2.0
  </button>
</div>

{/* Upcoming Virtual Meetup Announcement */}
<div
  style={{
    background: "#f4f4f9",
    border: "1px solid #d3d3d3",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "20px",
  }}
>
  <h2>Join Our Virtual Community Meetup</h2>
  <p>
    <em>Posted on November 4, 2024 by Community Team</em>
  </p>
  <p>
    We’re hosting a virtual meetup on <strong>November 15, 2024</strong> to bring together Fitness Log users and contributors from around the world. Whether you’re a seasoned user or just getting started, this event is a fantastic opportunity to connect, share experiences, and gain insights.
  </p>
  <h3>Agenda for the meetup:</h3>
  <ul>
    <li>Overview of new features in v2.0</li>
    <li>Roadmap discussion: What’s next for Fitness Log?</li>
    <li>Live demo: Advanced tracking features</li>
    <li>Community stories: Hear from users and their fitness journeys</li>
    <li>Q&A with the Fitness Log development team</li>
  </ul>
  <p>
    Come prepared with your questions, feedback, and ideas for future updates. Let’s build a stronger, more supportive community together!
  </p>
  <button
    style={{
      background: "#ff5722",
      border: "none",
      borderRadius: "5px",
      color: "#fff",
      padding: "10px 20px",
      marginTop: "10px",
      cursor: "pointer",
    }}
  >
   save to calender
  </button>
</div>
    </main>
  );
};

export default Announcement;
