import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá pessoal! Sou a <span className="purple">Luana </span>
            e moro no<span className="purple"> Rio de Janeiro, Brasil.</span>
            <br />Eu comecei a gostar de programação ainda na faculdade de atuária mas sabe aquele sentimento de será que isso é pra mim? Foi então que eu conheci a Trybe e me apaixonei por{" "}
            <b className="purple"> Desenvolvimento Web</b> Penso em talvez unir meus conhecimentos de estatística com o 
            <b className="purple"> Back-End.</b>
            <br />Minha maior vontade hoje é ser uma profissional que faça diferença de alguma forma nesse mundão através da tecnologia.Ser uma{" "} 
            <b className="purple">
              Desenvolvedora Full-Stack e Interpretar Dados {" "}
            </b>
             são meus principais objetivos
            <br />
            <br />
            Nem só de vida profissional se vive né?! 😛 
            <br />
            Meus hobbies favoritos:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Surf
            </li>
            <li className="about-activity">
              <ImPointRight /> Praticar esportes e competir
            </li>
            <li className="about-activity">
              <ImPointRight /> Ler sobre Mercado Financeiro
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#14FFEC", opacity: 0.7 }}>
            "Um vencedor é um sonhador que nunca desiste."{" "}
          </p>
          <footer className="blockquote-footer">Nelson Mandela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
