import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#00B1A2",
    grade3: "#00D8C6",
    grade2: "#36DDD0",
    grade1: "#9AFFF7",
    grade0: "#DDFFFC",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Minhas <strong className="purple">Contrubuições</strong>
      </h1>
      <GitHubCalendar // https://github.com/Bloggify/github-calendar
        username="luanamonero"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
