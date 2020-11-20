import React from 'react';

import './assets/styles/global.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Feature from './components/Feature';

import signupArrowDown from './assets/images/arrow-down.png';
import Box from './components/Box';
import Video from './components/Video';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Presentation>
        <div className="text-center signup">
          <h5>Características fundamentais de uma conduta ética</h5>
          <img width="80px" src={signupArrowDown} alt="Inscreva-se" />
        </div>
        <Feature
          color={"#4A5C65"}
          title="Altruísmo"
          info="a preocupação com os interesses do outro de uma forma espontânea e positivista."
        >
          <Box type="FEATURE" feature="altruismo" background_color={'#4A5C65'} />
        </Feature>
        <Feature
          color={'#02BDC7'}
          title="Moralidade"
          info="conjunto de valores que conduzem o comportamento, as escolhas, decisões e ações."
        >
          <Box type="FEATURE" feature="moralidade" background_color={'#02BDC7'} />
        </Feature>
        <Feature
          color={"#FFB600"}
          title="Virtude"
          info="essa característica pode ser definida como a “excelência humana” ou aquilo que nos faz plenos e autênticos."
        >
          <Box type="FEATURE" feature="virtude" background_color={'#FFB600'} />
        </Feature>
        <Feature
          color={'#FC4067'}
          title="Solidariedade"
          info="princípios que se aplicados às relações sociais e que orientam a vivência e convívio em harmonia do individuo com os demais."
        >
          <Box type="FEATURE" feature="solidariedade" background_color={'#FC4067'} />
        </Feature>
      </Presentation>
      <Video />
      <Footer />
    </div>
  );
}

export default App;
