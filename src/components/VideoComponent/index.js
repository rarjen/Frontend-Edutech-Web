import React, { useRef, useEffect } from "react";

function VideoComponent({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = src;
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [src]);

  return (
    <div style={{ width: 660, height: "auto" }}>
      <video
        ref={videoRef}
        controls
        autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoComponent;
