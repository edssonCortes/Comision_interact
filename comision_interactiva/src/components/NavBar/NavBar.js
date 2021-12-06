import React from 'react'
import "./NavBar.css"
import LogoNav from '../../imgs/descarga.png'
import twitter from '../../imgs/twitter.png'
import facebook from '../../imgs/facebook.png'
import youtube from '../../imgs/youtube.png'
import {Link} from 'react-scroll'

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
                        <Link className="o_title_nav" to='1' smooth='true' duration='1000' >¿Quienes somos?</Link>
                        <Link className="o_title_nav"to='2' smooth='true' duration='1000'offset={-100}>Video interactivo</Link>
                        <Link className="o_title_nav" to='3' smooth='true' duration='1000'>Juega y aprende</Link>
                        <Link className="o_title_nav" to='4' smooth='true' duration='1000'>Informe</Link>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default NavBar
