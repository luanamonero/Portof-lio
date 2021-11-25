import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import home1 from "../../Assets/home1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import Particle from "../Particle";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXA EU <span className="purple"> CONTAR </span> UM POUCO SOBRE MIM
            </h1>
            <p className="home-about-body">
              Comecei minha jornada em tecnologia na faculdade, aprendendo a usar softwares estatísticos 📊
              <br />
              <br />Minhas principais skills são:
              <i>
                <b className="purple">
                  {" "}
                  React, Redux, Javascript, Hooks e Sql.{" "}
                </b>
              </i>
              <br />
              <br />
              Minhas áreas de interesse são:&nbsp;
              <i>
                <b className="purple">Desenvolvimento Web </b> e {" "}
                <b className="purple">Ciência de Dados.</b>
              </i>
              <br />
              <br />
              Sempre estou procurando aprender, então posso dizer que me arrisco também no 
              <i>
                <b className="purple"> Mercado Financeiro.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
             {/* https://www.npmjs.com/package/react-parallax-tilt */}
            <Tilt>
              <img src={home1} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>MINHAS REDES SOCIAIS</h1>
            <p>
              Sintam-se <span className="purple">a vontade </span>para me chamarem por lá 😊
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/luanamonero"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/luanamonero"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/luanamb2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
