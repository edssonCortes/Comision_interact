import React, { useState, useEffect } from "react";
import "./VideoInteractivo.css";
import video from "../../imgs/video.mp4";
import video3 from "../../imgs/video3.mp4";

function VideoInteractivo() {
  const [src, setSrc] = useState(video); //URL DEL VIDEO
  const videoPlayer = document.getElementById("videoProject"); //OBTENER INFORMACIÓN DEL VIDEO ACTUAL
  const [videos, setVideos] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);

  //ARREGLO DE BOTONES CON LOS VIDEOS

  const video1 = [
    {
      id: 1,
      styles: {
        transform: "translate(0px, 10px)",
        nameBtn: "Video1",
        display: "none",
        background: "black",
        color: "white",
        width: "50px",
        height: "50px",
      },
      src: video,
    },
    {
      id: 2,
      styles: {
        transform: "translate(50px, 10px)",
        nameBtn: "Video2",
        display: "none",
        background: "black",
        color: "white",
        width: "50px",
        height: "50px",
      },
      src: video3,
    },
  ];

  //CAMBIAR DE VIDEO
  const action = (idBtn) => {
    if (videos === 1) {
      video1.map((vd1) => {
        if (vd1.id === idBtn) {
          setSrc(vd1.src);
        }
        return vd1;
      });
    }
    videoPlayer.load();
  };

  useEffect(() => {
    //ACTUALIZAR EL TIEMPO TRANSCURRIDO DEL VIDEO
    if (videoPlayer) {
      videoPlayer.ontimeupdate = function () {
        setCurrentTime(videoPlayer.currentTime);
      };
    }
  }, []);


  useEffect(() => {
    if (videos === 1) {
      if (currentTime >= 10 &&  currentTime <= 15 ) {
        return video1.map((vd1) => (vd1.styles.display = "block"));
      }
    }
  }, [currentTime]);

  return (
    <div>
      <div className="container">
        <video className="" id="videoProject" controls autoPlay src={src} />{" "}
        {video1.map((vd1) => (
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
