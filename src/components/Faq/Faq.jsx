// src/components/Dashboard.jsx

import { FaFileAlt, FaStar, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
// import '../../Highlights.css';

const Faq = () => {
  return (
    <main>
      <h1>Frequently Asked Questions</h1>

      <div
        style={{
          background: "",
          border: "1px solid black",
          borderRadius: "5px",
          marginTop: "15px",
          justifyContent: "left",
          padding: "5px",
        }}
      >
        <h2>What is the Fitness Log?</h2>
        <p>
          Fitness Log is a comprehensive fitness tracking tool that helps you
          monitor your workouts, nutrition, and overall progress towards your
          fitness goals. It allows you to log exercises, track calorie intake,
          set goals, and analyze your fitness journey over time.
        </p>
      </div>

      <div
        style={{
          background: "",
          border: "1px solid black",
          borderRadius: "5px",
          marginTop: "15px",
          justifyContent: "left",
          padding: "5px",
        }}
      >
        <h2>Is Fitness Log free to use?</h2>
        <p>
          Yes, Fitness Log is free to use with basic features , and it is an open source project that is constantly being improved by a community of developers. You can access the source code on GitHub and contribute to the project if you have programming skills.
        </p>
      </div>

      <div
        style={{
          background: "",
          border: "1px solid black",
          borderRadius: "5px",
          marginTop: "15px",
          justifyContent: "left",
          padding: "5px",
        }}
      >
        <h2>What technologies does the Fitness Log use?</h2>
        <p>
          Fitness Log is built using a modern tech stack, including React for
          the front end, Node.js and Express for the back end, and MongoDB for
          data storage. This ensures a smooth, responsive experience on both web
          and mobile devices.
        </p>
      </div>

      <div
        style={{
          background: "",
          border: "1px solid black",
          borderRadius: "5px",
          marginTop: "15px",
          justifyContent: "left",
          padding: "5px",
        }}
      >
        <h2>Is there a mobile app for Fitness Log?</h2>
        <p>
         no , currently there is no moblile version for fitness log , but since its web based it is accessible through mobiles .
        </p>
      </div>

      <div
        style={{
          background: "",
          border: "1px solid black",
          borderRadius: "5px",
          marginTop: "15px",
          justifyContent: "left",
          padding: "5px",
        }}
      >
        <h2>How often is Fitness Log updated?</h2>
        <p>
          We release major updates quarterly to introduce new features and
          improvements based on user feedback. Minor updates, including bug
          fixes and performance enhancements, are rolled out monthly.
        </p>
      </div>
    </main>
  );
};

export default Faq;
