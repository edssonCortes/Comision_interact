import React from 'react'
import './Titulos.css'

function Titulos(props) {
    let texto = props.texto;
    return (
        <div >
            <h3 id='1' className="o_titulos_h3">
                {texto}
            </h3>
        </div>
    )
}

export default Titulos
