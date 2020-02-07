import React from "react";
import Button from "./styled";

const Step = ({ id, volume, mute, onClick, soundSrc }) => {
  const stepClick = () => {
    const audio = document.getElementById(`audio-${id}`)
    audio.load();
    audio.play();
    onClick(id);
  }
  return (
    <Button
      id={id}
      data-testid={id}
      className={`${volume ? "step isActive" : "step"} ${mute ? "mute" : ""}`}
      volume={volume}
      onClick={stepClick}
    >
      <audio id={`audio-${id}`}>
        <source src={soundSrc} type="audio/wav" />
      </audio>
    </Button>
  );
};

export default Step;
