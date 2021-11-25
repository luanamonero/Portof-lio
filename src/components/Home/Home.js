import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../Assets/profile.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 20 }} className="heading">
                Olá, Pessoal! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                Eu sou a<strong className="main-name"> LUANA MONERÓ</strong>
              </h1>

              <div style={{ padding: 60, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5}>
              <img src={profile} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
