import React from "react";
import "./Footer.css";

import twitter from "../../imgs/twitter.png";
import facebook from "../../imgs/facebook.png";
import youtube from "../../imgs/youtube.png";
import instagram from "../../imgs/instagram.png";
import tiktok from "../../imgs/tiktok.png";


function Footer() {
  function instagramRedirect() {
    window.open(' https://www.instagram.com/comisionverdadc/', '_blank');
  }
  function tiktokRedirect() {
    
    window.open(' https://www.tiktok.com/@comisionverdadc?', '_blank');
  }
  function faceRedirect() {
    window.open(' https://www.facebook.com/ComisionVerdadC', '_blank');
    
  }

  function ytRedirect() {
    
    window.open(' https://www.youtube.com/c/Comisi%C3%B3ndelaVerdad', '_blank');
  }
  function twittRedirect() {
    
    window.open(' https://twitter.com/ComisionVerdadC', '_blank');
  }

  return (
    <div className="o_footer">
      <div className="space2">
        <div className="space3"></div>
        <div className="o_contact">
          <div className="o_pCont">
            <p className="o_contact_text">Contactanos</p>
          </div>
          <div className="o_logos">
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
        </div>
      </div>
      <div className="o_footText">
        <h3 className="o_h3Foot">
          &copy; 2021 Universidad Autónoma de Occidente
        </h3>
      </div>
    </div>
  );
}

export default Footer;
