import React from "react";
import "./Informe.css";
import Subtitulos from "../Subtitulos/Subtitulos";


import { Carousel as Cr } from "react-carousel-minimal";

const Informe = () => {


  const handleRecursos = ()=>{
    window.open('https://comisiondelaverdad.co/actualidad/publicaciones',"_blank")
  }

  
  const datos = [
    {
      image:
        "https://comisiondelaverdad.co/media/zoo/images/Arauca_contexto01_c00d6e0e9cecd85ac4eebdb4db4ad53f.jpg",
      caption: "",
    },
   
   
    
  ];

  return (
    <div className="o_contenedorTarjeta" id="4">
      <div className="o_div_izq">
        <Subtitulos
          textSubtitle="Infórmese"
          descrip="La comisión de la verdad ha llegado a su fin y con ello ha dejado un gran legado que se compone de
          reparación de víctimas, trabajo social con las comunidades, un sin fin de videos e información para los colombianos
          además de un informe detallado para que se esclarezca la verdad y todos podamos conocer cómo se llegó a la guerra
          y al perdón, además de conocer todas las consecuencias y resultados que dejo este hecho que ha marcado la historia de los 
          Colombianos."
          descrip2="Aqui podra encontrar información de los avances de la comisión."
        ></Subtitulos>
        <button className="o_btnDescarga" onClick={handleRecursos}>RECURSOS </button>
      </div>
      <div className="o_div_der">
      <Cr
          data={datos}
          time={5000}
          width="850px"
          height="500px"
          radius="16px"
          slideNumber={false}
          captionPosition="bottom"
          automatic={false}
          dots={false}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={false}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  );
};

export default Informe;

