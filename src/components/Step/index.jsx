import React from "react";
import Button from "./styled";

const Step = ({ id, volume, mute, onClick, soundSrc }) => {
  return (
    <Button
      id={id}
      className={`${volume ? "step isActive" : "step"} ${mute ? "mute" : ""}`}
      volume={volume}
      onClick={() => {
        document.getElementById(`audio-${id}`).play();
        onClick(id);
      }}
    >
      <audio id={`audio-${id}`}>
        <source src={soundSrc} type="audio/wav" />
      </audio>
    </Button>
  );
};

export default Step;
