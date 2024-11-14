import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yashwanth Kasanneni </span>
            from <span className="purple">  Hyderabad, India.</span>
            <br />
            I am currently pursuing my Undergrad in Vellore Institute of Technology
            <br />
            I Chose my major as Computer Science and my Minor as Business Systems
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am driven by a vision to make a tangible difference and believe that, when it comes to addressing the worlds challenges, the journey to innovate and improve never truly ends.
            "{" "}
          </p>
          <footer className="blockquote-footer">Yashwanth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
