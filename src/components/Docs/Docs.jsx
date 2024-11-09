import React from "react";
import "./Docs.css";

const Docs = () => {
  return (
    <div className="docs-page">
      <div className="docs-header">
        <h1>Fitness Log Documentation</h1>
      </div>
      <div className="docs-section">
        <h2>System Requirements</h2>
        <ul className="requirements-list">
          <li>React JS</li>
          <li>Node.js</li>
          <li>npm Library</li>
        </ul>
      </div>
      <div className="docs-section">
        <h2>Installation</h2>
        <p>
          Clone the repository and install the dependencies using the following
          commands:
        </p>
        <ul className="installation-list">
          <li>Fork the repository from our GitHub link.</li>
          <li>
            Clone the repository:
            <br />
            <code>git clone https://github.com/VinsintQ/Fitness-Log</code>
          </li>
          <li>
            Navigate to the cloned directory:
            <br />
            <code>cd Fitness-Log</code>
          </li>
          <li>
            Install dependencies:
            <br />
            <code>npm install</code>
          </li>
          <li>
            Setup your <code>.env</code> file (don't forget to add it to
            <code>.gitignore</code>).
          </li>
          <li>Make changes to the code.</li>
          <li>Submit a pull request.</li>
        </ul>
      </div>
    </div>
  );
};

export default Docs;
