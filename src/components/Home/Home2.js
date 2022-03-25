import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Particle from "../Particle";
import { FaLinkedinIn } from "react-icons/fa";
import { TiPin } from "react-icons/ti";
import ProjectCard from "../Projects/ProjectCards";
import myImg from "../../Assets/myAvatar.svg";
import wallet from "../../Assets/Projects/wallet.gif";
import Movie from "../../Assets/Projects/Movie.gif";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import app from "../../Assets/Projects/app.gif";
import { Link } from "react-router-dom";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXA EU <span className="purple"> CONTAR </span> UM POUCO SOBRE
              MIM
            </h1>
            <p className="home-about-body">
              Comecei minha jornada em tecnologia na faculdade, aprendendo a
              usar softwares estatísticos 📊
              <br />
              <br />
              Minhas principais skills são:
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
                <b className="purple">Desenvolvimento Web </b> e{" "}
                <b className="purple">Ciência de Dados.</b>
              </i>
              <br />
              <br />
              Sempre estou procurando aprender, então posso dizer que me arrisco
              também no
              <i>
                <b className="purple"> Mercado Financeiro.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={myImg}
              className="img-fluid"
              alt="avatar"
              style={{ borderRadius: "50%" }}
            />
          </Col>
        </Row>
        <Row>
          <Container fluid className="project-section">
            <Container>
              <h1 className="project-heading">
                <strong className="purple">Pinned </strong> Projects
              </h1>
              <Button
                variant="primary"
                href="https://github.com/luanamonero?tab=repositories"
                target="_blank"
              >
                <BiLinkExternal /> Ver Todos
              </Button>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                  <TiPin
                    size={45}
                    style={{ color: "#19f6e8", paddingBottom: "10px" }}
                  />
                  <ProjectCard
                    imgPath={app}
                    title="App de Receitas"
                    link="https://github.com/luanamonero/project-app-receitas"
                  />
                </Col>
                <Col md={4} className="project-card">
                  <TiPin
                    size={45}
                    style={{ color: "#19f6e8", paddingBottom: "10px" }}
                  />
                  <ProjectCard
                    imgPath={wallet}
                    title="Trybe Wallet"
                    description="Neste projeto eu desenvolvi uma carteira de controle de gastos com conversor de moedas. A ideia era que ao utilizar essa aplicação um usuário fosse capaz de: Adicionar, remover e editar um gasto;
                    Visualizar uma tabelas com seus gastos;
                    Visualizar o total de gastos convertidos para uma moeda de escolha. Essa aplicação foi feita em React usando o Redux como ferramenta de manipulação de estado."
                    link="https://github.com/luanamonero/trybe-wallet"
                  />
                </Col>
              </Row>
            </Container>
          </Container>
          <Col md={12} className="home-about-social">
            <h1>MINHAS REDES SOCIAIS</h1>
            <p>
              Sintam-se <span className="purple">a vontade </span>para me
              chamarem por lá 😊
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
