import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="grey">Shivang Srivastava </span>
            from <span className="purple"> Lucknow,Uttar Pradesh, India.</span>
            <br /> I am a Pre-final year student pursuing Btech in Computer Science with Specialization in Artificial Intelligence and Machine learning From Gla university.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Podcast
            
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is All about next step"{" "}
          </p>
          <footer className="blockquote-footer">Shivang Srivastava</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
