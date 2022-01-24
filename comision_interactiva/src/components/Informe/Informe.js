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
          descrip="Aqui podra encontrar información"
          descrip2="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a
          galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a 
          galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries"
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

