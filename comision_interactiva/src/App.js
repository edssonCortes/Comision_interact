
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';

import Titulos from './components/Titulos/Titulos.js';
import Landing from './imgs/Landing.jpg';
import './App.css';
import Subtitulos from './components/Subtitulos/Subtitulos.js';
/*import video from "./imgs/video.mp4"*/
import juego from "./imgs/juego.png"
import VideoInteractivo from './components/VideoInteractivo/VideoInteractivo.js';
import Informe from './components/Informe/Informe.js';
/*import video from "https://www.youtube.com/watch?v=ZQhYeztNMcg"*/



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="o_container">
        <img className="o_imgLanding" src={Landing} alt="Landing" />
        <Titulos className="except" texto="¿Quienes somos?"></Titulos>
        <p className="o_parrafo">Somos una Entidad de Estado que busca el esclarecimiento de los patrones y causas explicativas del conflicto armado interno que satisfaga el derecho de las víctimas y de la sociedad a la verdad, promueva el reconocimiento de lo sucedido, la convivencia en los territorios y contribuya a sentar las bases para la no repetición, mediante un proceso de participación amplio y plural para la construcción de una paz estable y duradera.</p>
      </div>
      <Subtitulos textSubtitle="Video interactivo" descrip="Bienvenido al espacio del video interactivo, en el cual haras parte de un recorrido informativo sobre la Comision de la Verdad y las diferentes iniciativas que tiene. "></Subtitulos>
      {/*<video className="videitotry" controls loop>
        <source src={video} type="video/mp4" />
      </video>
      {/*<img className="videitotry" src={video} alt="video"/>*/}
      
       <VideoInteractivo>  </VideoInteractivo>



      <Subtitulos textSubtitle="Juega y aprende" descrip="Video juego interactivo desarrollado con base a la informacion recolactada por “La comision de la verdad”.
      Este juego evalua la capacidad de comprensión y evalua que tan preparado estas para transmitir tus conocimientos a otras personas."></Subtitulos>
      
   

      <Informe/>


      <Footer></Footer>


    </div>
  );
}

export default App;

