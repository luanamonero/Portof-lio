import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Movie from "../../Assets/Projects/Movie.gif";
import pokedex from "../../Assets/Projects/pokedex.png";
import StarWars from "../../Assets/Projects/StarWars.png";
import app from "../../Assets/Projects/app.gif";
import wallet from "../../Assets/Projects/wallet.gif";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus  <strong className="purple">Projetos </strong> Recentes
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
              imgPath={Movie}
              title="Movie Cards Library"
              description="Esse projeto tinha objetivo de treinar o uso do React e Api. Fomos capazes de ler o estado de um componente e usá-lo para alterar o que exibimos no browser, inicializar um componente, dando a ele um estado pré-definido e atualizar, capturar eventos utilizando a sintaxe do React."
              link="https://github.com/luanamonero/project-movie-cards-library-stateful"

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
              imgPath={app}
              title="App de Receitas"
              link="https://github.com/luanamonero/project-app-receitas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wallet}
              title="Trybe Wallet"
              description="Neste projeto eu desenvolvi uma carteira de controle de gastos com conversor de moedas. A ideia era que ao utilizar essa aplicação um usuário fosse capaz de: Adicionar, remover e editar um gasto;
              Visualizar uma tabelas com seus gastos;
              Visualizar o total de gastos convertidos para uma moeda de escolha. Essa aplicação foi feita em React usando o Redux como ferramenta de manipulação de estado, realizando operações básicas de criação e manipulação de um estado."
              link="https://github.com/luanamonero/trybe-wallet"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
