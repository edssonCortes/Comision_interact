import React from "react";
import "./NavBar.css"; 
import twitter from "../../imgs/twitter.png";
import facebook from "../../imgs/facebook.png";
import youtube from "../../imgs/youtube.png";
import instagram from "../../imgs/instagram.png";
import tiktok from "../../imgs/tiktok.png";
import logoInteract from "../../imgs/logoInteract.png";
import { Link } from "react-scroll";

function NavBar() {
  function instagramRedirect() {
    window.location.href = "  https://www.instagram.com/comisionverdadc/";
  }
  function tiktokRedirect() {
    window.location.href = "https://www.tiktok.com/@comisionverdadc?";
  }
  function faceRedirect() {
    window.location.href = "https://www.facebook.com/ComisionVerdadC";
  }

  function ytRedirect() {
    window.location.href = "https://www.youtube.com/c/Comisi%C3%B3ndelaVerdad";
  }
  function twittRedirect() {
    window.location.href = "https://twitter.com/ComisionVerdadC";
  }
  
  return (
    <div>
      <nav className="o_navBar">
        <div className="o_imgCont">
         <Link to="1"  smooth="true" duration={1000}> <img className="imgNav" src={logoInteract} alt="logoNav" /></Link>
        </div>
        <div className="o_nav_interno">
          <div className="o_nav_superior">
            <p className="contact">Contactanos</p>
            <img
              className="img"
              src={instagram}
              alt="instagram"
              onClick={() => instagramRedirect()}
            />

            <img
              className="img"
              src={tiktok}
              alt="tiktok"
              onClick={() => tiktokRedirect()}
            />
            <img
              className="img"
              src={facebook}
              alt="facebook"
              onClick={() => faceRedirect()}
            />
            <img
              className="img"
              src={youtube}
              alt="youtube"
              onClick={() => ytRedirect()}
            />
            <img
              className="img"
              src={twitter}
              alt="twitter"
              onClick={() => twittRedirect()}
            />
          </div>
          <div className="o_nav_inferior">
            <Link className="o_title_nav" to="1" smooth="true" duration={1000}>
              ¿Quienes somos?
            </Link>
            <Link
              className="o_title_nav"
              to="2"
              smooth="true"
              duration={1000}
              offset={-100}
            >
              Video interactivo
            </Link>
            <Link
              className="o_title_nav"
              to="3"
              smooth="true"
              duration={1000}
              offset={-100}
            >
              Juega y aprende
            </Link>
            <Link className="o_title_nav" to="4" smooth="true" duration={1000}>
              Recursos
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
