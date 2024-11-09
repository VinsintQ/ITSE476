import React from "react";
import "./Announcements.css";
import { FiUserPlus } from "react-icons/fi";

const Announcements = () => {
  return (
    <div className="announcements-page">
      <header className="announcements-header">
        <h1 className="title">Fitness Log Announcements</h1>
      </header>
      <div className="announcement-card">
        <h2 className="card-title">
          <FiUserPlus className="icon" />
          Join Us in Building Fitness Log!
        </h2>
        <p className="card-description">
          As Fitness Log expands and evolves, we’re excited to welcome
          passionate contributors who want to make a difference in the fitness
          and wellness space. Whether you’re a developer eager to build
          features, a designer with an eye for seamless user experience, a
          writer who can make documentation a breeze, or a tester who ensures
          top-notch quality—your skills and ideas are invaluable to our
          community. Help us shape Fitness Log into the ultimate open-source
          fitness tracking tool. Come be a part of something impactful!{" "}
          <span className="date">November 9, 2024</span>
        </p>
      </div>
    </div>
  );
};

export default Announcements;
