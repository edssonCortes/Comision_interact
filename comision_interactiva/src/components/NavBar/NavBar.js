import React from 'react'
import "./NavBar.css"
import LogoNav from '../../imgs/descarga.png'
import twitter from '../../imgs/twitter.png'
import facebook from '../../imgs/facebook.png'
import youtube from '../../imgs/youtube.png'

function NavBar() {
    return (
        <div>

            <nav className="o_navBar">
                <div className="o_imgCont">
                    <img className="imgNav" src={LogoNav} />
                </div>
                <div class="o_nav_interno">
                    <div className="o_nav_superior">
                        <p className="contact">Contactanos</p>
                        <img className="img" src={twitter} alt="twitter" />
                        <img className="img" src={facebook} alt="youtube" />
                        <img className="img" src={youtube} alt="facebook" />
                    </div>
                    <div className="o_nav_inferior">
                        <h3 className="o_title_nav" >¿Quienes somos?</h3>
                        <h3 className="o_title_nav">Video interactivo</h3>
                        <h3 className="o_title_nav">Juega y aprende</h3>
                        <h3 className="o_title_nav">Informe</h3>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default NavBar
