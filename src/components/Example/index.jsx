import React from 'react';
import { Fade } from 'react-bootstrap';

import './styles.css';

const Example = (props) => {
  return (
    <>
      <Fade appear={true} in={true} timeout={600}>
        <article className="example">
          <div className="mb-3" style={{ maxWidth: '100%' }}>
            <div className="text-center">
              <img width="204" height="226" src={`${process.env.PUBLIC_URL}/features/${props.profile}`} alt={props.name} />
            </div>
          </div>
        </article>
      </Fade>
    </>
  );
};

export default Example;
