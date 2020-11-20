import React from 'react';
import { Container, Fade, ResponsiveEmbed, Row } from 'react-bootstrap';

import './styles.css';

const Video = () => {
  return (
    <>
      <section className="video">
        <Container>
          <Row className="justify-content-center mb-3">
            <h1>ÉTICA POR CLÓVIS DE BARROS FILHO</h1>
          </Row>
          <Row className="justify-content-center">
            <Fade appear={true} in={true} timeout={600}>
              <ResponsiveEmbed aspectRatio="16by9">
                <iframe title="Vídeo" src="https://www.youtube.com/embed/EVixxe2fTyI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </ResponsiveEmbed>
            </Fade>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Video;
