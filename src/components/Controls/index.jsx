import React from "react";
import { BPM_CHANGE } from "../../utils/constants";

import {
  Button,
  BPMContainer,
  Container,
  PlayPauseBtn,
  BPMValue,
  BPMPlus,
  BPMLess
} from "./styled";

const Controls = ({ onPlayPauseClick, isPlaying, BPM, moreLessBPMClick }) => {
  return (
    <Container>
      <PlayPauseBtn onClick={() => onPlayPauseClick()}>
        {isPlaying ? "||" : "Play"}
      </PlayPauseBtn>
      <BPMContainer>
        <BPMLess onClick={() => moreLessBPMClick(BPM_CHANGE.LESS)}>-</BPMLess>
        <BPMValue> {`${BPM} bpm`} </BPMValue>
        <BPMPlus onClick={() => moreLessBPMClick(BPM_CHANGE.MORE)}>+</BPMPlus>
      </BPMContainer>
    </Container>
  );
};

export default Controls;
