import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import pokedex from "../../Assets/Projects/pokedex.png";
import StarWars from "../../Assets/Projects/StarWars.png";
import leaderboard from "../../Assets/Projects/leaderboard.png";
import movie from "../../Assets/Projects/Movie.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong> Recentes
        </h1>
        <p style={{ color: "white" }}>
          Esses são alguns dos principais projetos que fiz pela Trybe.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokedex}
              title="Pokedex"
              description="Implementação de forma simplificada uma Pokedex!! Para os que não estão familiarizados com o universo Pokemon , a Pokedex é uma enciclopédia de todos os pokemons na natureza. A aplicação mostra todos os pokemons presentes no arquivo data.js."
              link="https://github.com/luanamonero/pokedex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaderboard}
              title="LeaderBoard Soccer"
              link="https://github.com/luanamonero/project-leaderboard-soccer"
              description="Nesse projeto o objetivo era desenvolver uma API (utilizando o método TDD) e também integrar - através do docker-compose - as aplicações para que funcionem consumindo um banco de dados.
              Foi construído um back-end dockerizado utilizando modelagem de dados através do Sequelize."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StarWars}
              title="StarWars Planets"
              description="Desenvolvendo uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais.
              Treinamos fazer requisição a Api, renderizar em uma tabela e filtrar o resultado de acordo com o input."
              link="https://github.com/luanamonero/project-starwars-planets-search"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              title="Movie Cards Library"
              description="Esse projeto tinha objetivo de treinar o uso do React e Api. Fomos capazes de ler o estado de um componente e usá-lo para alterar o que exibimos no browser, inicializar um componente, dando a ele um estado pré-definido e atualizar, capturar eventos utilizando a sintaxe do React."
              link="https://github.com/luanamonero/project-movie-cards-library-stateful"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
