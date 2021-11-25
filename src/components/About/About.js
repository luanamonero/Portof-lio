import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import about from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Quem <strong className="purple">EU SOU</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
              <img src={about} alt="about" className="img-fluid" />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Principais <strong className="purple">Habilidades </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Ferramentas</strong> mais usadas
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
