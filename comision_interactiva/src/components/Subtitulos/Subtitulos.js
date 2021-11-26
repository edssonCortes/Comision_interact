import React from 'react'
import './Subtitulos.css'


function Subtitulos(props) {

    let textSubtitle = props.textSubtitle;
    let descrip = props.descrip;
    return (
        <div className="o_subContainer">
            <div className="o_line"></div>
            <div className="sub">

                <h3 className="o_subtitulos">{textSubtitle}</h3>
                <p className="o_descripcion">{descrip}</p>
            </div>

        </div>
    )
}

export default Subtitulos
