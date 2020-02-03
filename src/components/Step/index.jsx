import React from "react";
import Button from "./styled";

const Step = ({ id, volume, onClick, soundSrc }) => {
  console.log(id)
  return (
  <Button
    className="step"
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
);}

export default Step;
