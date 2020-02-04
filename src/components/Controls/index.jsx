import React from "react";
import { Button, BPMContainer, Container } from "./styled";

const Controls = ({onPlayPauseClick}) => {
  return (
    <Container>
      <Button onClick={() => onPlayPauseClick()} style={{display:"flex", alignItems: "flex-end"}}>Play</Button>
      <BPMContainer>
        <Button>_</Button>
        <input type="number" min="60" max="200" />
        <Button>+</Button>
      </BPMContainer>
    </Container>
  );
};

export default Controls;
