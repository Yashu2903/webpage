import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="PickerUpper"
              description="Developed an autonomous trash-picking robot using Raspberry Pi and Arduino, detecting waste with computer vision. Integrated motor drivers and serial communication for efficient navigation and control."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Gymnius"
              description="
Developed a full-stack mobile app, Gymnius, using Flutter and Node.js for personalized calorie tracking. Integrated a TensorFlow model with TFLite for 85% accurate food recognition and Nutritionix API for precise calorie data."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Heeal"
              description="It is a healthcare accessibility app created with Flutter and Flask, integrating Google Maps for locating nearby health centers and AI-based disease detection using Naive Bayes and CNN models."             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI-Driven Email Processing System"
              description="It uses AI to automate email responses to order requests and manages inventory in real-time with Google Sheets, ensuring efficiency and scalability for large product catalogs."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Based Music Recommendation"
              description="
              Used a CNN classifier trained on FER-2013 with OpenCV to detect faces and predict emotions. Based on detected emotions (like happy, sad, angry), a music recommendation module suggests suitable songs through APIs or predefined playlists. The system provides real-time emotion-based music recommendations."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
