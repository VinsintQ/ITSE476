import React from "react";
import "./Download.css";

const Zip_FILE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/file_zip.zip`;

const Download = () => {
  const downloadFile = (url) => {
    const file = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", file);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="download-page">
      <div className="content-container">
        <h1 className="download-title">Download Fitness Log</h1>
        <p className="download-description">
          Kickstart your fitness journey with Fitness Log, the open-source
          solution designed for easy fitness tracking and customization.
          Download the latest version to get started and make logging workouts a
          seamless part of your routine!
        </p>
        <div className="button-group">
          <button
            className="download-button"
            onClick={() => downloadFile(Zip_FILE_URL)}
          >
            Download Latest Version
          </button>
          <a
            href="https://github.com/VinsintQ/Fitness-Log.git"
            className="github-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clone GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
