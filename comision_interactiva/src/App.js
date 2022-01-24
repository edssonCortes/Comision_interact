import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Titulos from "./components/Titulos/Titulos.js";
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
  let VIDEO = "https://videocomiuao.web.app";
  let JUEGO = "https://videojuegocomiuao.web.app/";

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

        <Titulos texto="¿Quienes somos?"></Titulos>
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
          <iframe
            title="iframeVideo"
            className="iframeVideo"
            scrolling="no"
            src={VIDEO}
          ></iframe>
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
        <iframe
          title="iframeJuego"
          className="iframeJuego"
          scrolling="no"
          src={JUEGO}
        ></iframe>
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
