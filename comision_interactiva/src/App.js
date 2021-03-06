import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Titulos from "./components/Titulos/Titulos.js";
import "./App.css";
import Subtitulos from "./components/Subtitulos/Subtitulos.js";
import imgJuego from "./imgs/imagen_juego.png";
import imgVideo from "./imgs/imagen_video.png";
import imgClose from "./imgs/close.png";
import { useState } from "react";
import Informe from "./components/Informe/Informe.js";
import { Carousel } from "react-carousel-minimal";
import Trivia from "./components/Trivia/Trivia.jsx";

function App() {
  let [mostrar, setMostrar] = useState(false);
  let [mostrarVideo, setMostrarVideo] = useState(false);
  let VIDEO = "https://videocomiuao.web.app";
  /*let JUEGO = "https://videojuegocomiuao.web.app/";*/

  const imagenes = [
    {
      image:
        "https://comisiondelaverdad.co/media/zoo/images/comunidad_uwa13_657b6a1c17b0d0b8388a146fd0ba27f4.jpg",
      caption: "",
    },
    {
      image:
        "https://comisiondelaverdad.co/media/zoo/images/comunidad_uwa06_e42fa4db143f80c4020bca2a4bb05ad7.jpg",
      caption: "",
    },
    {
      image:
        "https://comisiondelaverdad.co/media/zoo/images/comunidad_uwa03_d84d3e3cf21ab09ba07c34408933b7a6.jpg",
      caption: "",
    },
    {
      image:
        "https://comisiondelaverdad.co/media/zoo/images/amazonas06f_c852fbeb6ff8724059a0762890ca2203.jpg",
      caption: "",
    },
    {
      image:
        "https://comisiondelaverdad.co/media/zoo/images/quibdofoto08_0962b8c58dd4b9e2e388185b70b004be.jpg",
      caption: "",
    },
    {
      image:
        "https://comisiondelaverdad.co/media/zoo/images/aguanegra02_7410403642a15b54e072ea973d7442b7.jpg",
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
          thumbnailWidth="100px"
        ></Carousel>

        <Titulos texto="??Qui??nes somos?"></Titulos>
        <p className="o_parrafo">
          Somos una Entidad de Estado que busca el esclarecimiento de los
          patrones y causas explicativas del conflicto armado interno que
          satisfaga el derecho de las v??ctimas y de la sociedad a la verdad,
          promueva el reconocimiento de lo sucedido, la convivencia en los
          territorios y contribuya a sentar las bases para la no repetici??n,
          mediante un proceso de participaci??n amplio y plural para la
          construcci??n de una paz estable y duradera.
        </p>
      </div>
      <Subtitulos
        id="2"
        textSubtitle="Video interactivo"
        descrip="Bienvenido al espacio del video interactivo, en el cual haras parte de un recorrido informativo sobre la Comision de la Verdad y las diferentes iniciativas que tiene. Durante el recorrido del video interactivo usted encontrar?? 3 tem??ticas diferentes, cada una de ellas le permite ir al canal de youtube al que hace referencia, el ciclo es infinito, puedes verlo cuantas veces quieras. "
      ></Subtitulos>

      <div className="containerIframe">
        {mostrarVideo ? (
          <> <img className="o-cerrar-video" src={imgClose} alt="imgJuego" onClick={() => setMostrarVideo(!mostrarVideo)} />
          
          <iframe
            title="iframeVideo"
            className="iframeVideo"
            scrolling="no"
            src={VIDEO}
          ></iframe></>
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
        descrip="Video juego interactivo desarrollado con base a la informacion recolactada por ???La comision de la verdad???.
        Este juego evalua la capacidad de comprensi??n y evalua que tan preparado estas para transmitir tus conocimientos a otras personas.
        Teniendo en cuenta la informaci??n que nos ha proporcionado el video interactivo; responde las preguntas de este video juego, las cuales te ayudaran a saber que tan capacitado est??s para ayudarnos a difundir el mensaje de la verdad."
      ></Subtitulos>

      {mostrar ? (
        
        <Trivia
        setMostrar={setMostrar}
        />
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
