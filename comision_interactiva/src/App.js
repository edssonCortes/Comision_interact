import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Titulos from "./components/Titulos/Titulos.js";
import Landing from "./imgs/Landing.jpg";
import "./App.css";
import Subtitulos from "./components/Subtitulos/Subtitulos.js";
import imgJuego from "./imgs/imagen_juego.png"
import imgVideo from "./imgs/imagen_video.png";
import { useState } from "react";

import Informe from "./components/Informe/Informe.js";

  function App() {



    
    let [mostrar, setMostrar] = useState(false);



  let VIDEO = "http://127.0.0.1:5500/index.html";
  let JUEGO = "http://localhost:3001/";
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="1" className="o_container">
        <img className="o_imgLanding" src={Landing} alt="Landing" />
        <Titulos className="except" texto="¿Quienes somos?"></Titulos>
        <p className="o_parrafo">
          Somos una Entidad de Estado que busca el esclarecimiento de los
          patrones y causas explicativas del conflicto armado interno que
          satisfaga el derecho de las víctimas y de la sociedad a la verdad,
          promueva el reconocimiento de lo sucedido, la convivencia en los
          territorios y contribuya a sentar las bases para la no repetición,
          mediante un proceso de participación amplio y plural para la
          construcción de una paz estable y duradera.
        </p>
      </div>
      <Subtitulos
        id="2"
        textSubtitle="Video interactivo"
        descrip="Bienvenido al espacio del video interactivo, en el cual haras parte de un recorrido informativo sobre la Comision de la Verdad y las diferentes iniciativas que tiene. "
      ></Subtitulos>

      <div className="containerIframe">
        <iframe className="iframeVideo" scrolling="no" src={VIDEO}></iframe>
      </div>
      <Subtitulos
        id="3"
        textSubtitle="Juega y aprende"
        descrip="Video juego interactivo desarrollado con base a la informacion recolactada por “La comision de la verdad”.
      Este juego evalua la capacidad de comprensión y evalua que tan preparado estas para transmitir tus conocimientos a otras personas."
      ></Subtitulos>
      
      
      

      {mostrar ? <iframe className="iframeJuego" scrolling="no" src={JUEGO}></iframe>: 
      
      
      <><img className="o_img_juego" src={imgJuego} alt="imgJuego"  /> 
      <button  className="o_btnJuego" onClick={() => setMostrar(!mostrar)  } >INICIAR JUEGO</button></>}

      
      <Informe />

      <Footer></Footer>
    </div>
  );
}

export default App;
