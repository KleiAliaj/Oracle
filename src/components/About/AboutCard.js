import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          We start with your desired result: <span className="purple">More customers? New look? More time and energy to do 
 what you do best? </span>
 Once we have an ironclad objective in place, <span className="purple"> we create digital roadmaps that get you there.</span>
            <br />Only then do we dig into our
    vast toolbox of skills
         
            and expertise to craft messaging, design experiences, 
    and build the ideal technology tools for your project by:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> TAKE THE TIME TO UNDERSTAND THE PROBLEM
            </li>
            <li className="about-activity">
              <ImPointRight /> ON TIME. ON BUDGET. ON TARGET.
            </li>
            <li className="about-activity">
              <ImPointRight /> THINK LIKE USERS, DESIGN FOR HUMANS
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;



