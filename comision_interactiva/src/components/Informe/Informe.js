import React from "react";
import "./Informe.css";
import Subtitulos from "../Subtitulos/Subtitulos";
import imgIzq from "../../imgs/video.png";
import { Carousel } from 'react-carousel-minimal';


const Informe = () => {
  const data = [
    {
      image: "https://comisiondelaverdad.co/media/zoo/images/Arauca_contexto01_c00d6e0e9cecd85ac4eebdb4db4ad53f.jpg",
      caption: ""
    },
    {
      image: "https://comisiondelaverdad.co/media/zoo/images/Arauca_contexto02_e768885ec0b9aee2f30dfe325ebac805.jpg",
      caption: ""
    },
    {
      image: "https://comisiondelaverdad.co/media/zoo/images/Arauca_contexto05_5f83a1014fbe3dcf3cacccb96e06a456.jpg",
      caption: ""
    },
    {
      image: "https://comisiondelaverdad.co/media/zoo/images/afrocol03_68c8011842be86ef88e1c6376fa44e8d.jpg",
      caption: ""
    },
    {
      image: "https://comisiondelaverdad.co/media/zoo/images/desaparecidosMagdalena03_d2d5429f0904eca1b0bd980d02fe7f7e.jpg",
      caption: ""
    },
    {
      image: "https://comisiondelaverdad.co/media/zoo/images/desaparecidosMagdalena07_2484c3e24926ee1aa860c5813ccde6cc.jpg",
      caption: ""
    },
    {
      image: "https://comisiondelaverdad.co/media/zoo/images/desaparecidosMagdalena09_34b0b24698c4aede7479e8ab06705964.jpg",
      caption: ""
    },
    {
      image: "https://comisiondelaverdad.co/media/zoo/images/desaparecidosMagdalena10_4aea3f2521564fab9173c48929d5077e.jpg",
      caption: ""
    },
    {
      image: "https://comisiondelaverdad.co/media/zoo/images/comunidad_uwa07_2e24ec259a9b5aa9b998e64753c8fe1f.jpg",
      caption: ""
    }
  ];




  return (
    <div className="o_contenedorTarjeta" id='4'>
      <div className="o_div_izq">
      <Subtitulos
          textSubtitle="Informe final de la verdad"
          descrip="Dicho informe data de lo que ha sido el proceso de paz en colombia,
             la reparacion, no repiticion y esclarecimiento de los hechos en el territorio 
            colombiano que fueron generados por la violencia."
        ></Subtitulos>
      </div>
      <div className="o_div_der">

      <Carousel
            data={data}
            time={5000}
            width="850px"
            height="500px"
            
            radius="16px"
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
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        {/* <img className="o_infoImg" src={imgIzq} alt="twitter" />*/ }
      </div>
    </div>
  );
};

export default Informe;


/*  */