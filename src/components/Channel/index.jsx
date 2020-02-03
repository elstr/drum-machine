import React, { useEffect, useState } from "react";

// Components
import Instrument from "../Instrument";
import Step from "../Step";
import { RoundButton } from "../_common";
import {
  RemoveBtn,
  ButtonContainer,
  Container,
  PatternContainer,
  InstrumentContainer
} from "./styled";

// Channel S = solo => played solo
// Channel M = mute => innactive / mute => opacity set

const buildStepPattern = channel => {
  let pattern = {};
  for (var i = 0; i < 16; i++) {
    pattern[`${channel}-step-${i}`] = { id: `${channel}-step-${i}`, volume: 0 };
  }
  return pattern;
};

const Channel = props => {
  const [pattern, setPattern] = useState([]);
  
  useEffect(() => {
    const pattern = buildStepPattern(props.id);
    setPattern(pattern);
  }, []);

  const handleStepClick = id => {
    const selectedStep = pattern[`${id}`];
    const updatedStep = Object.assign({}, selectedStep, {
      volume: selectedStep.volume + 1
    });

    if (updatedStep.volume === 3) updatedStep.volume = 0;

    const updatedPattern = Object.assign({}, pattern);
    updatedPattern[`${updatedStep.id}`] = updatedStep;
    setPattern(updatedPattern);
  };

  return (
    <Container>
      <ButtonContainer>
        <RoundButton>S</RoundButton>
        <RoundButton>M</RoundButton>
      </ButtonContainer>
      <InstrumentContainer>
        <Instrument {...props} />
        <RemoveBtn>X</RemoveBtn>
      </InstrumentContainer>
      <PatternContainer>
        {Object.keys(pattern).map((key, i) => (
          <Step
            key={`step${i}`}
            {...pattern[key]}
            soundSrc={props.soundSrc}
            onClick={handleStepClick}
          />
        ))}
      </PatternContainer>
    </Container>
  );
};

export default Channel;
