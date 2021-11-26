import React from 'react'
import './Footer.css'
import bg from '../../imgs/foot.png'
import twitter from '../../imgs/twitter.png'
import facebook from '../../imgs/facebook.png'
import youtube from '../../imgs/youtube.png'


function Footer() {
    return (
        <div className="o_footer">


            <div className="space2">
                <div className="space3">hola</div>
                <div className="o_contact">
                    <div className="o_pCont">
                        <p className="o_contact_text">Contactanos</p>
                    </div>
                    <div className="o_logos">
                        <img className="img" src={twitter} alt="twitter" />
                        <img className="img" src={facebook} alt="youtube" />
                        <img className="img" src={youtube} alt="facebook" />
                    </div>
                </div>


            </div>
            <div className="o_footText">
                <h3 className="o_h3Foot">© 2021 Comisión para el Esclarecimiento de la Verdad, la Convivencia y la No Repetición </h3>
            </div>



        </div>
    )
}

export default Footer
