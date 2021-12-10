import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Titulos from "./components/Titulos/Titulos.js";
import Landing from "./imgs/Landing.jpg";

import "./App.css";
import Subtitulos from "./components/Subtitulos/Subtitulos.js";
import imgJuego from "./imgs/imagen_juego.png";
import imgVideo from "./imgs/imagen_video.png";
import { useState } from "react";
import Informe from "./components/Informe/Informe.js";
import { Carousel } from "react-carousel-minimal";

function App() {
  let [mostrar, setMostrar] = useState(false);
  let [mostrarVideo, setMostrarVideo] = useState(false);

  let VIDEO = "https://videocomiuao.web.app/";
  let JUEGO = "https://videojuegocomiuao.web.app/";

  const imagenes = [
    {
      image:
        "https://comisiondelaverdad.co/media/zoo/images/Arauca_contexto01_c00d6e0e9cecd85ac4eebdb4db4ad53f.jpg",
      caption: "",
    },
   
    
    {
      image:
        "https://comisiondelaverdad.co/media/zoo/images/Arauca_contexto05_5f83a1014fbe3dcf3cacccb96e06a456.jpg",
      caption: "",
    },
    {
      image:
        "https://comisiondelaverdad.co/media/zoo/images/afrocol03_68c8011842be86ef88e1c6376fa44e8d.jpg",
      caption: "",
    },
    {
      image:
        "https://comisiondelaverdad.co/media/zoo/images/desaparecidosMagdalena03_d2d5429f0904eca1b0bd980d02fe7f7e.jpg",
      caption: "",
    },
   
  ];
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="1" className="o_container">
        <Carousel   
        data={imagenes}
        time={10000}
        width="100%"
        height="35vw"
        radius=""
        slideNumber={true}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={false}
        thumbnailWidth="100px" ></Carousel>


        <Titulos  texto="¿Quienes somos?"></Titulos>
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
        {mostrarVideo ? (
          <iframe title="iframeVideo"className="iframeVideo" scrolling="no" src={VIDEO}></iframe>
        ) : (
          <>
            <img className="o_img_video" src={imgVideo} alt="imgJuego" />
            <button
              className="o_btnVideo"
              onClick={() => setMostrarVideo(!mostrarVideo)}
            >
              INICIAR VIDEO
            </button>
          </>
        )}
      </div>
      <Subtitulos
        id="3"
        textSubtitle="Juega y aprende"
        descrip="Video juego interactivo desarrollado con base a la informacion recolactada por “La comision de la verdad”.
      Este juego evalua la capacidad de comprensión y evalua que tan preparado estas para transmitir tus conocimientos a otras personas."
      ></Subtitulos>

      {mostrar ? (
        <iframe title="iframeJuego"className="iframeJuego" scrolling="no" src={JUEGO}></iframe>
      ) : (
        <>
          <img className="o_img_juego" src={imgJuego} alt="imgJuego" />
          <button className="o_btnJuego" onClick={() => setMostrar(!mostrar)}>
            INICIAR JUEGO
          </button>
        </>
      )}

      <Informe />

      <Footer></Footer>
    </div>
  );
}

export default App;
