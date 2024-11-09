import React from "react";
import "./FAQ.css";
import { FiPlusCircle } from "react-icons/fi";

const FAQ = () => {
  return (
    <div className="faq-page">
      <header className="faq-header">
        <h1>Fitness Log FAQ</h1>
        <p>
          Find answers to common questions about getting started and using
          Fitness Log.
        </p>
      </header>

      <div className="faq-content">
        <div className="faq-section">
          <h2>
            <FiPlusCircle className="icon" /> What is Fitness Log?
          </h2>
          <p>
            Fitness Log is a web application that helps you keep track of your
            fitness goals and progress.
          </p>
        </div>

        <div className="faq-section">
          <h2>
            <FiPlusCircle className="icon" /> How do I get started?
          </h2>
          <p>
            To get started, create an account and start logging your workouts
            and meals.
          </p>
        </div>

        <div className="faq-section">
          <h2>
            <FiPlusCircle className="icon" /> How do I log a workout?
          </h2>
          <p>
            Go to the "Workouts" tab and click on the "Add Workout" button.
            Enter workout details and click "Save".
          </p>
        </div>

        <div className="faq-section">
          <h2>
            <FiPlusCircle className="icon" /> How do I log a meal?
          </h2>
          <p>
            Go to the "Meals" tab and click on the "Add Meal" button. Enter meal
            details and click "Save".
          </p>
        </div>

        <div className="faq-section">
          <h2>
            <FiPlusCircle className="icon" /> How do I track my progress?
          </h2>
          <p>Go to the "Progress" tab and view your workout and meal logs.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
