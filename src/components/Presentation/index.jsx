import React from 'react';

import './styles.css';

import { Col, Container, Row } from 'react-bootstrap';

const Presentation = (props) => {
  return (
    <>
      <section className="presentation">
        <Container className="">
          <Row className="paragraph">
            <Col xs={12}>
              <h1>COMPORTAMENTO ÉTICO</h1>
              <p>Comportamento Ético é uma consiência moral, atribuida a boa conduta e procedimentos individuais, é agir com autodeterminação, autocontrole e de forma ordenada em qualquer situação e fundamental em todos os momentos da vida.</p>
            </Col>
          </Row>
          {props.children}
        </Container>
      </section>
    </>
  );
};

export default Presentation;
