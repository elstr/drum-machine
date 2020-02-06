import React from "react";
import { BPM_CHANGE } from "../../utils/constants";
import { PlayIcon, PauseIcon, LessIcon, PlusIcon } from "../../assets/svg";
import {
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
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </PlayPauseBtn>
      <BPMContainer>
        <BPMLess onClick={() => moreLessBPMClick(BPM_CHANGE.LESS)}>
          <LessIcon />
        </BPMLess>
        <BPMValue> {`${BPM} bpm`} </BPMValue>
        <BPMPlus onClick={() => moreLessBPMClick(BPM_CHANGE.MORE)}>
          <PlusIcon />
        </BPMPlus>
      </BPMContainer>
    </Container>
  );
};

export default Controls;
