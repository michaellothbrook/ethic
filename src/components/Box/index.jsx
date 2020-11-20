import React from "react";
import { Container, Fade } from "react-bootstrap";
import Example from "../Example";

import { Examples } from "../../constants/Examples";

import "./styles.css";

const Box = (props) => {
  const {type,feature} = props
  return (
    <>
      <Container className="box" style={{ backgroundColor: props.background_color }}>
        <h2>Exemplos</h2>
        {Examples[type][feature].map(example => {
          return (
            <Fade key={example.profile} appear={true} in={true} timeout={1000}>
              <Example profile={example.profile} name={example.name} />
            </Fade>
          );
        })}
      </Container>
    </>
  );
};

export default Box;
