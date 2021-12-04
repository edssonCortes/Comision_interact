import React from "react";
import "./Informe.css";
import Subtitulos from "../Subtitulos/Subtitulos";
import imgIzq from "../../imgs/video.png";

const Informe = () => {
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
        <img className="o_infoImg" src={imgIzq} alt="twitter" />
      </div>
    </div>
  );
};

export default Informe;


/*  */