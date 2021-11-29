import React, { useState, useEffect } from "react";
import "./VideoInteractivo.css";

function VideoInteractivo() {
  const videoPlayer = document.getElementById("videoProject"); //OBTENER INFORMACIÓN DEL VIDEO ACTUAL
  const [src, setSrc] = useState(
    "http://media.w3.org/2010/05/sintel/trailer.mp4"
  ); //URL DEL VIDEO
  const [videos, setVideos] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  //ARREGLO DE BOTONES CON LOS VIDEOS
  const [videos1, setVideos1] = useState([
    {
      id: 1,
      styles: {
        transform: "translate(0px, 10px)",
        nameBtn: "Video1",
        display: "block",
        background: "black",
        color: "white",
        width: "50px",
        height: "50px",
      },
      src: "http://media.w3.org/2010/05/bunny/trailer.mp4",
    },
    {
      id: 2,
      styles: {
        transform: "translate(50px, 10px)",
        nameBtn: "Video2",
        display: "block",
        background: "black",
        color: "white",
        width: "50px",
        height: "50px",
      },
      src: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
  ]);

  //CAMBIAR DE VIDEO
  const action = (idBtn) => {
    if (videos === 1) {
      videos1.map((vd1) => {
        if (vd1.id === idBtn) {
          setSrc(vd1.src);
        }
        return vd1;
      });
    }
    videoPlayer.load();
  };

  useEffect(() => {
    console.log(videoPlayer);
    if (videoPlayer) {
      videoPlayer.ontimeupdate = () => {
        setCurrentTime(videoPlayer.currentTime);
      };
    }
  }, [videoPlayer]);

  //ARREGLAR
  useEffect(() => {
    //ACTUALIZAR ANIMACIÓN
    videos1.map((vd) => {
      if (currentTime >= 5 && currentTime <= 10) {
        vd.styles.display = "block";
      } else {
        vd.styles.display = "none";
      }
      return vd;
    });
  }, [currentTime, videos1]);

  return (
    <div>
      <div className="container">
        <video id="videoProject" autoPlay controls>
          <source src={src} type="video/mp4" />
        </video>
        {videos1.map((vd1) => (
          <button
            type="button"
            key={vd1.id}
            onClick={() => action(vd1.id)}
            className="btn"
            style={{
              display: vd1.styles.display,
              background: vd1.styles.background,
              transform: vd1.styles.transform,
              color: vd1.styles.color,
              width: vd1.styles.width,
              height: vd1.styles.height,
            }}
          >
            {vd1.styles.nameBtn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VideoInteractivo;
