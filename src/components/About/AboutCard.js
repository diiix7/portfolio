import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Loick Adjiwanou</span>
            from <span className="purple"> Cotonou, Benin.</span>
            <br />
            I am currently working on my own on exciting projects.
            <br />
            I have completed the professional license in software architecture
            at ESGIS Benin.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> And coding ☺️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "it's the little things that make everything great !"{" "}
          </p>
          <footer className="blockquote-footer">diiix7</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
